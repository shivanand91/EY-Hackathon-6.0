import React from "react";

const VehicleForm = ({ form, onChange, onSubmit, loading }) => {
  const fields = [
    ["vehicle_id", "Vehicle ID", "text"],
    ["engine_temp", "Engine Temp (°C)", "number"],
    ["battery_voltage", "Battery Voltage (V)", "number"],
    ["tyre_pressure", "Tyre Pressure (PSI)", "number"],
    ["rpm", "RPM", "number"],
    ["speed", "Speed (km/h)", "number"],
  ];

  return (
    <div className="bg-slate-900/80 rounded-2xl p-6 shadow-lg border border-slate-800">
      <h2 className="text-2xl font-semibold mb-2 text-yellow-300">
        Vehicle Health Input
      </h2>
      <p className="text-xs text-slate-300 mb-4">
        Enter live or simulated sensor readings to run the agentic diagnosis.
      </p>

      <div className="space-y-3">
        {fields.map(([name, label, type]) => (
          <div key={name} className="flex flex-col gap-1">
            <label className="text-xs text-slate-300">{label}</label>
            <input
              type={type}
              name={name}
              value={form[name]}
              onChange={onChange}
              className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        ))}
      </div>

      <button
        onClick={onSubmit}
        disabled={loading}
        className="mt-5 w-full py-2.5 rounded-lg bg-yellow-400 text-slate-900 font-semibold text-sm hover:bg-yellow-300 disabled:opacity-60 transition"
      >
        {loading ? "Running agents..." : "Run Diagnosis"}
      </button>
    </div>
  );
};

export default VehicleForm;
