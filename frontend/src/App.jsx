import { useState, useCallback } from "react";
import VehicleForm from "./components/VehicleForm.jsx";
import DiagnosisCard from "./components/DiagnosisCard.jsx";
import OEMInsightsCard from "./components/OEMInsightsCard.jsx";
import api from "./services/api.js";

function App() {
  const [form, setForm] = useState({
    vehicle_id: "CAR-001",
    engine_temp: "120",
    battery_voltage: "11.2",
    tyre_pressure: "26",
    rpm: "3500",
    speed: "40",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const runDiagnosis = useCallback(async () => {
    setLoading(true);
    setResult(null);

    const payload = {
      vehicleId: form.vehicle_id,
      engine_temp: form.engine_temp ? Number(form.engine_temp) : null,
      battery_voltage: form.battery_voltage
        ? Number(form.battery_voltage)
        : null,
      tyre_pressure: form.tyre_pressure
        ? Number(form.tyre_pressure)
        : null,
      rpm: form.rpm ? parseInt(form.rpm, 10) : null,
      speed: form.speed ? Number(form.speed) : null,
    };

    try {
      const res = await api.post("/diagnose", payload);
      setResult(res?.data?.data ?? null);
    } catch (err) {
      console.error(err);
      alert("Backend error while running diagnosis");
    } finally {
      setLoading(false);
    }
  }, [form]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-yellow-300">
            Agentic AI – Autonomous Predictive Maintenance
          </h1>
          <p className="text-sm text-slate-300">
            Multi-agent system for early fault detection, explanation, and
            automated service planning.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <VehicleForm
            form={form}
            onChange={handleChange}
            onSubmit={runDiagnosis}
            loading={loading}
          />

          <div className="space-y-6">
            <DiagnosisCard result={result} loading={loading} />
            <OEMInsightsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
