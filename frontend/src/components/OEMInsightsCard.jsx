import React, { useEffect, useState } from "react";
import { api } from "../services/api";

const OEMInsightsCard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api
      .get("/oem-insights")
      .then((res) => setData(res.data))
      .catch(() => setData({}));
  }, []);

  return (
    <div className="bg-slate-900/80 rounded-2xl p-4 shadow border border-slate-800 mt-4">
      <h3 className="text-sm font-semibold text-yellow-300 mb-2">
        OEM Insights (Prototype)
      </h3>
      {!data || Object.keys(data).length === 0 ? (
        <p className="text-xs text-slate-400">
          No aggregated issues yet. Run a few diagnoses to populate insights.
        </p>
      ) : (
        <ul className="text-xs text-slate-200 space-y-1">
          {Object.entries(data).map(([issue, count]) => (
            <li key={issue}>
              <span className="text-slate-400">{issue}:</span> {count} vehicles
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OEMInsightsCard;
