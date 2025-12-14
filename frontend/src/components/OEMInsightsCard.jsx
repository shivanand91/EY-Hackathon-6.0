import React, { useEffect, useState } from "react";
import { fetchOEMInsights } from "../services/api";

const OEMInsightsCard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchOEMInsights()
      .then((res) => {
        // backend response shape: { success: true, data: [...] }
        setData(res?.data?.data || []);
      })
      .catch((err) => {
        console.error("OEM Insights error:", err);
        setError(true);
      });
  }, []);

  return (
    <div className="bg-slate-900/80 rounded-2xl p-4 shadow border border-slate-800 mt-4">
      <h3 className="text-sm font-semibold text-yellow-300 mb-2">
        OEM Insights (Prototype)
      </h3>

      {error ? (
        <p className="text-xs text-red-400">
          Unable to load OEM insights.
        </p>
      ) : !data || data.length === 0 ? (
        <p className="text-xs text-slate-400">
          No aggregated issues yet. Run a few diagnoses to populate insights.
        </p>
      ) : (
        <ul className="text-xs text-slate-200 space-y-1">
          {data.map((item, idx) => (
            <li key={idx}>
              <span className="text-slate-400">{item._id}:</span>{" "}
              {item.count} vehicles
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OEMInsightsCard;
