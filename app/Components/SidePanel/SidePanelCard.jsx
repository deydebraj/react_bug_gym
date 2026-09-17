import { Badge } from "../../../SharedComponents/ui/badge";
import { formatSequence } from "../../Utils/utils";

export const SidePanelCard = ({
  problem,
  serialNumber,
  isActive,
  onSelect,
}) => {
  const badgeClass =
    {
      easy: "badge-green",
      medium: "badge-blue",
      hard: "badge-red",
    }[problem.difficulty] ?? "badge-blue";

  return (
    <a
      href={`#problem-${problem.questionId}`}
      onClick={onSelect}
      className={`flex w-full items-center gap-2 overflow-hidden !h-[58px] !rounded-[10px] !p-2.5 ${
        isActive
          ? "border border-lime-400/35 bg-lime-950/45 hover:bg-lime-950/60"
          : "border border-transparent bg-slate-900/70 hover:bg-slate-800/80"
      }`}
    >
      <span
        className={`flex size-[30px] shrink-0 items-center justify-center rounded-lg text-xs font-medium tabular-nums ${
          isActive
            ? "bg-lime-400 text-slate-950"
            : "bg-slate-800 text-slate-400"
        }`}
      >
        {formatSequence(serialNumber)}
      </span>
      <span className="flex min-w-0 flex-1 flex-col justify-center gap-0.5">
        <span
          className={`truncate text-sm font-semibold ${isActive ? "text-slate-100" : "text-slate-300"}`}
        >
          {problem.name}
        </span>
        <span className="text-xs text-slate-500">{problem.maxTime} min</span>
      </span>
      <Badge
        variant="outline"
        className={`${badgeClass} self-start capitalize`}
      >
        {problem.difficulty}
      </Badge>
    </a>
  );
};
