"use client";

import { useState } from "react";
import { SidePanel } from "./Components/SidePanel/SidePanel";
import { Editor } from "./Components/Editor/Editor";
import { SidePanelContext } from "./Contexts/SidePanelContext";

export default function Home() {
  const [selectedProblemId, setSelectedProblemId] = useState(1);

  return (
    <SidePanelContext.Provider
      value={{ selectedProblemId, setSelectedProblemId }}
    >
      <div className="flex min-h-screen">
        <SidePanel />
        <main className="flex min-w-0 flex-1 flex-col gap-4 p-6">
          <Editor />
        </main>
      </div>
    </SidePanelContext.Provider>
  );
}
