import React from "react";
import WorkshopList from "./WorkshopList";


const formatDateTime = (isoString) => {
  if (!isoString) return "Not scheduled";

  const date = new Date(isoString);

  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const DiagnosisCard = ({ result, loading }) => {
  if (loading) {
    return (
      <div className="bg-slate-900/80 rounded-2xl p-6 shadow-lg border border-slate-800">
        <h2 className="text-xl font-semibold text-yellow-300 mb-2">
          AI Diagnosis
        </h2>
        <p className="text-sm text-slate-300">
          Running multi-agent pipeline…
        </p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="bg-slate-900/80 rounded-2xl p-6 shadow-lg border border-slate-800">
        <h2 className="text-xl font-semibold text-yellow-300 mb-2">
          AI Diagnosis
        </h2>
        <p className="text-sm text-slate-300">
          Diagnosis result will appear here after running the analysis.
        </p>
      </div>
    );
  }

  const severityColor =
    result.severity === "high"
      ? "bg-red-500/20 text-red-300"
      : result.severity === "medium"
      ? "bg-orange-500/20 text-orange-300"
      : "bg-emerald-500/20 text-emerald-300";

  return (
    <div className="bg-slate-900/80 rounded-2xl p-6 shadow-lg border border-slate-800">
      <h2 className="text-xl font-semibold text-yellow-300 mb-4">
        AI Diagnosis & Service Plan
      </h2>

      <div className="space-y-4 text-sm">
        <div>
          <p className="text-xs text-slate-400 uppercase">Vehicle</p>
          <p>{result.vehicleId}</p>
        </div>

        <div>
          <p className="text-xs text-slate-400 uppercase">Severity</p>
          <span
            className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${severityColor}`}
          >
            {result.severity?.toUpperCase() ?? "UNKNOWN"}
          </span>
        </div>

        <div>
          <p className="text-xs text-slate-400 uppercase">Detected Issues</p>
          {result.issues?.length === 0 ? (
            <p className="text-emerald-300">No critical issues detected</p>
          ) : (
            <ul className="list-disc list-inside">
              {result.issues?.map((issue, idx) => (
                <li key={idx}>{issue}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <p className="text-xs text-slate-400 uppercase">AI Explanation</p>
          <p className="mt-1">{result.explanation}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-slate-400 uppercase">
              Recommended Slot
            </p>
            <p>{formatDateTime(result.recommendedSlot)}</p>
          </div>

          <div>
            <p className="text-xs text-slate-400 uppercase">Workshop</p>
            <p>{result.workshop}</p>
          </div>
        </div>
      </div>
      <WorkshopList diagnosis={result} />
    </div>
  );
};

export default DiagnosisCard;
