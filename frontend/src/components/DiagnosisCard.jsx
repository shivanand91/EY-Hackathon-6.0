import React from "react";

const DiagnosisCard = ({ result, loading }) => {
  if (loading) {
    return (
      <div className="bg-slate-900/80 rounded-2xl p-6 shadow-lg border border-slate-800">
        <h2 className="text-xl font-semibold mb-3 text-yellow-300">
          AI Diagnosis & Service Plan
        </h2>
        <p className="text-sm text-slate-300">
          Running multi-agent pipeline…
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900/80 rounded-2xl p-6 shadow-lg border border-slate-800 flex flex-col">
      <h2 className="text-xl font-semibold mb-3 text-yellow-300">
        AI Diagnosis & Service Plan
      </h2>

      {!result ? (
        <p className="text-sm text-slate-300">
          Results will appear here. Fill the values on the left and click{" "}
          <span className="font-semibold text-yellow-300">Run Diagnosis</span>.
        </p>
      ) : (
        <div className="space-y-4 text-sm text-slate-100">
          <div>
            <p className="text-xs uppercase text-slate-400">Vehicle</p>
            <p className="font-medium">{result.vehicle_id}</p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-400">Severity</p>
            <p
              className={
                "inline-flex px-2 py-1 rounded-full text-xs font-semibold " +
                (result.severity === "high"
                  ? "bg-red-500/20 text-red-300"
                  : result.severity === "medium"
                  ? "bg-orange-500/20 text-orange-300"
                  : result.severity === "low"
                  ? "bg-emerald-500/20 text-emerald-300"
                  : "bg-slate-600/40 text-slate-200")
              }
            >
              {result.severity.toUpperCase()}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-400">Detected Issues</p>
            {result.issues.length === 0 ? (
              <p className="text-emerald-300 mt-1">
                No critical issues detected.
              </p>
            ) : (
              <ul className="list-disc list-inside mt-1 space-y-1">
                {result.issues.map((issue, idx) => (
                  <li key={idx}>{issue}</li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <p className="text-xs uppercase text-slate-400">AI Explanation</p>
            <p className="mt-1 whitespace-pre-line">{result.explanation}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-2">
            <div>
              <p className="text-xs uppercase text-slate-400">
                Recommended Slot
              </p>
              <p className="mt-1">{result.recommended_slot}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-slate-400">Workshop</p>
              <p className="mt-1">{result.workshop}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiagnosisCard;
