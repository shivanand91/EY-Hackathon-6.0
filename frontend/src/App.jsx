import { useState, useCallback } from "react";
import VehicleForm from "./components/VehicleForm.jsx";
import DiagnosisCard from "./components/DiagnosisCard.jsx";
import OEMInsightsCard from "./components/OEMInsightsCard.jsx";
import { api } from "./services/api.js";

function App() {
  const [form, setForm] = useState({
    vehicle_id: "CAR-001",
    engine_temp: "120",     // keep as strings for controlled inputs
    battery_voltage: "11.2",
    tyre_pressure: "26",
    rpm: "3500",
    speed: "40",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // Controlled input handler — values are strings; convert before sending
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  // basic client-side validation (returns {ok: boolean, message?: string})
  const validatePayload = (payload) => {
    if (!payload.vehicle_id || payload.vehicle_id.trim() === "") {
      return { ok: false, message: "vehicle_id is required" };
    }
    // Example numeric checks:
    if (payload.engine_temp !== null && isNaN(payload.engine_temp))
      return { ok: false, message: "engine_temp must be a number" };

    if (payload.rpm !== null && (!Number.isInteger(payload.rpm) || payload.rpm < 0))
      return { ok: false, message: "rpm must be a non-negative integer" };

    return { ok: true };
  };

  const runDiagnosis = useCallback(async () => {
    setLoading(true);
    setResult(null);

    // convert inputs to numbers or nulls
    const payload = {
      ...form,
      engine_temp:
        form.engine_temp === "" ? null : Number.parseFloat(form.engine_temp),
      battery_voltage:
        form.battery_voltage === "" ? null : Number.parseFloat(form.battery_voltage),
      tyre_pressure:
        form.tyre_pressure === "" ? null : Number.parseFloat(form.tyre_pressure),
      rpm: form.rpm === "" ? null : parseInt(form.rpm, 10),
      speed: form.speed === "" ? null : Number.parseFloat(form.speed),
    };

    const validation = validatePayload(payload);
    if (!validation.ok) {
      setLoading(false);
      alert(validation.message);
      return;
    }

    try {
      // Make sure your `api` has a baseURL set (services/api.js)
      const res = await api.post("/diagnose", payload);
      // guard: use consistent result shape
      setResult(res?.data ?? { message: "No response body" });
    } catch (err) {
      console.error("API error:", err);
      // show more meaningful error if server returned one
      const serverMessage =
        err?.response?.data?.message ||
        err?.response?.data ||
        err?.message ||
        "Unknown error";
      alert("Error calling backend: " + serverMessage);
      setResult({ error: serverMessage });
    } finally {
      setLoading(false);
    }
  }, [form]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-yellow-300">
              Agentic AI – Autonomous Predictive Maintenance
            </h1>
            <p className="text-xs md:text-sm text-slate-300">
              Multi-agent system that detects failures early, explains them to
              users, and auto-plans service.
            </p>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <VehicleForm
            form={form}
            onChange={handleChange}
            onSubmit={runDiagnosis}
            loading={loading}
            // optionally pass a disabled prop for submit
          />

          <div>
            <DiagnosisCard result={result} loading={loading} />
            <OEMInsightsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
