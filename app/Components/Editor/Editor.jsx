"use client";
import * as Babel from "@babel/standalone";
import React, { useEffect, useRef, useState, useContext } from "react";
import { PlayIcon, Trash2Icon } from "lucide-react";
import { Button } from "../../../SharedComponents/ui/button";
import { questionData } from "../../MockData/questionData.js";
import { testCaseData } from "../../MockData/testCaseData.js";
import { SidePanelContext } from "../../Contexts/SidePanelContext";

const formatValue = (value) => {
  if (typeof value === "string") {
    return value;
  }

  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
};

export const Editor = () => {
  const { selectedProblemId } = useContext(SidePanelContext);
  const selectedQuestion = questionData.find(
    (item) => item.questionId === selectedProblemId,
  );
  const testCases =
    testCaseData.find((item) => item.questionId === selectedProblemId)
      ?.testCases ?? [];
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const previewContainerRef = useRef(null);
  const [output, setOutput] = useState([]);
  const [testResults, setTestResults] = useState([]);
  const [previewComponent, setPreviewComponent] = useState(null);
  const [previewError, setPreviewError] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState("output");

  useEffect(() => {
    if (!editorContainerRef.current) {
      return;
    }

    let editor;
    let disposed = false;

    globalThis.MonacoEnvironment = {
      getWorker(_, label) {
        if (label === "javascript" || label === "typescript") {
          return new Worker(
            new URL(
              "monaco-editor/esm/vs/language/typescript/ts.worker.js",
              import.meta.url,
            ),
            { type: "module" },
          );
        }

        return new Worker(
          new URL(
            "monaco-editor/esm/vs/editor/editor.worker.js",
            import.meta.url,
          ),
          { type: "module" },
        );
      },
    };

    import("monaco-editor").then(({ editor: monacoEditor }) => {
      if (disposed || !editorContainerRef.current) {
        return;
      }

      editor = monacoEditor.create(editorContainerRef.current, {
        value: selectedQuestion?.question ?? "",
        language: "javascript",
        theme: "vs-dark",
        automaticLayout: true,
        minimap: { enabled: false },
        padding: { top: 16, bottom: 16 },
        fontSize: 14,
      });
      editorRef.current = editor;
    });

    return () => {
      disposed = true;
      editorRef.current = null;
      editor?.dispose();
    };
  }, [selectedQuestion]);

  const runCode = async () => {
    const code = editorRef.current?.getValue();

    if (!code) {
      return;
    }

    const logs = [];
    const capture =
      (type) =>
      (...values) => {
        logs.push({
          type,
          value: values.map(formatValue).join(" "),
        });
      };

    setIsRunning(true);
    setOutput([]);
    setTestResults([]);
    setPreviewError("");

    try {
      const isReactCode = /(<[A-Za-z]|import\s+.*react|export\s+default)/.test(
        code,
      );

      if (isReactCode) {
        const importsRemoved = code.replace(
          /^\s*import[\s\S]*?from\s+["'][^"']+["'];?\s*/gm,
          "",
        );
        const componentMatch = importsRemoved.match(
          /export\s+default\s+function\s+([A-Za-z_$][\w$]*)/,
        );
        const componentName = componentMatch?.[1] ?? "PreviewComponent";
        const source = importsRemoved.replace(
          /export\s+default\s+function\s+[A-Za-z_$][\w$]*/,
          `function ${componentName}`,
        );
        const transformed = Babel.transform(source, {
          presets: ["react"],
        }).code;
        const createComponent = new Function(
          "React",
          "useState",
          "useEffect",
          "useRef",
          "useMemo",
          "useCallback",
          "useReducer",
          "useLayoutEffect",
          "useContext",
          "createContext",
          "memo",
          "Suspense",
          `${transformed}\nreturn ${componentName};`,
        );
        const Component = createComponent(
          React,
          React.useState,
          React.useEffect,
          React.useRef,
          React.useMemo,
          React.useCallback,
          React.useReducer,
          React.useLayoutEffect,
          React.useContext,
          React.createContext,
          React.memo,
          React.Suspense,
        );
        setPreviewComponent(() => Component);
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await new Promise((resolve) => requestAnimationFrame(resolve));

        const results = [];
        for (const test of testCases) {
          try {
            await test.run(previewContainerRef.current);
            results.push({ ...test, status: "passed" });
          } catch (error) {
            results.push({ ...test, status: "failed", message: error.message });
          }
        }
        setTestResults(results);
        setOutput([{ type: "info", value: "React preview rendered." }]);
        return;
      }

      const execute = new Function(
        "console",
        `"use strict"; return (async () => {\n${code}\n})();`,
      );

      await Promise.race([
        execute({
          log: capture("log"),
          info: capture("info"),
          warn: capture("warn"),
          error: capture("error"),
        }),
        new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error("Execution timed out after 5 seconds.")),
            5000,
          ),
        ),
      ]);

      const runTest = new Function(
        "console",
        `"use strict"; return (async () => {\n${code}\n${testCases.map((test) => test.source).join("\n")}\n})();`,
      );

      await Promise.race([
        runTest({
          log: () => {},
          info: () => {},
          warn: () => {},
          error: () => {},
        }),
        new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error("Tests timed out after 5 seconds.")),
            5000,
          ),
        ),
      ]);
      setTestResults(testCases.map((test) => ({ ...test, status: "passed" })));
    } catch (error) {
      setPreviewError(error.message);
      logs.push({ type: "error", value: error.message });
      setTestResults(
        testCases.map((test) => ({
          ...test,
          status: "failed",
          message: error.message,
        })),
      );
    } finally {
      setOutput(logs.length ? logs : [{ type: "info", value: "No output." }]);
      setIsRunning(false);
    }
  };

  return (
    <section className="flex min-w-0 flex-col gap-3">
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-semibold text-foreground">Code editor</h1>
        <Button onClick={runCode} disabled={isRunning}>
          <PlayIcon />
          {isRunning ? "Running..." : "Run"}
        </Button>
      </div>
      <div
        ref={editorContainerRef}
        className="code-surface h-[420px] w-full overflow-hidden rounded-lg border border-border"
      />
      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="border-b border-border px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Preview
        </div>
        <div
          className="preview-surface code-surface min-h-32 p-4 text-foreground"
          ref={previewContainerRef}
        >
          {previewError ? (
            <p className="text-sm text-red-400">{previewError}</p>
          ) : previewComponent ? (
            React.createElement(previewComponent)
          ) : (
            <p className="text-sm text-muted-foreground">
              Run React code to see its preview here.
            </p>
          )}
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-3 py-2">
          <div className="flex items-center gap-1">
            {[
              ["output", "Output"],
              ["tests", "Tests"],
            ].map(([tab, label]) => (
              <button
                className={`rounded-md px-2 py-1 text-xs font-medium ${
                  activeTab === tab
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                key={tab}
                onClick={() => setActiveTab(tab)}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>
          {activeTab === "output" && (
            <Button
              variant="ghost"
              size="icon-xs"
              onClick={() => setOutput([])}
              aria-label="Clear output"
              title="Clear output"
            >
              <Trash2Icon />
            </Button>
          )}
        </div>
        {activeTab === "output" ? (
          <pre className="min-h-24 whitespace-pre-wrap p-3 font-mono text-xs text-foreground">
            {output.length
              ? output.map((entry, index) => (
                  <span
                    className={`block ${
                      entry.type === "error"
                        ? "text-red-400"
                        : entry.type === "warn"
                          ? "text-amber-400"
                          : "text-muted-foreground"
                    }`}
                    key={`${entry.type}-${index}`}
                  >
                    {`[${entry.type}] ${entry.value}`}
                  </span>
                ))
              : "Run your code to see output here."}
          </pre>
        ) : (
          <div className="min-h-24 space-y-2 p-3 text-xs">
            {testResults.length
              ? testResults.map((test) => (
                  <div
                    className="flex items-start justify-between gap-3"
                    key={test.name}
                  >
                    <span className="text-foreground">{test.name}</span>
                    <span
                      className={
                        test.status === "passed"
                          ? "text-green-400"
                          : "text-red-400"
                      }
                    >
                      {test.status === "passed"
                        ? "Passed"
                        : `Failed: ${test.message}`}
                    </span>
                  </div>
                ))
              : "Run your code to run the tests."}
          </div>
        )}
      </div>
    </section>
  );
};
