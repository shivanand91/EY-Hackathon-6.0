import { useState } from "react";
import VehicleForm from "./components/VehicleForm.jsx";
import DiagnosisCard from "./components/DiagnosisCard.jsx";
import OEMInsightsCard from "./components/OEMInsightsCard.jsx";
import { api } from "./services/api.js";

function App() {
  const [form, setForm] = useState({
    vehicle_id: "CAR-001",
    engine_temp: 120,
    battery_voltage: 11.2,
    tyre_pressure: 26,
    rpm: 3500,
    speed: 40,
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const runDiagnosis = async () => {
    setLoading(true);
    setResult(null);
    try {
      const payload = {
        ...form,
        engine_temp: parseFloat(form.engine_temp),
        battery_voltage: parseFloat(form.battery_voltage),
        tyre_pressure: parseFloat(form.tyre_pressure),
        rpm: parseInt(form.rpm),
        speed: parseFloat(form.speed),
      };
      const res = await api.post("/diagnose", payload);
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Error calling backend. Check if FastAPI is running.");
    } finally {
      setLoading(false);
    }
  };

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
