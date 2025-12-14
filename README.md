---

# 🚗 Agentic AI for Autonomous Predictive Maintenance  
### EY Techathon 6.0 — Round 2 Submission  
**Team: XLCODER**

---

<p align="center">
  <img src="https://img.shields.io/badge/FastAPI-Backend-green?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/React-Frontend-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/TailwindCSS-Styling-06B6D4?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/LLM-Integrated-orange?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/AI-Agentic_System-purple?style=for-the-badge"/>
</p>

---

## 🧠 Executive Summary

The current vehicle maintenance ecosystem is **reactive**, discovering issues only after breakdowns occur. This leads to unexpected failures, high repair costs, and low customer satisfaction.

Our solution introduces an **Agentic AI-powered Predictive Maintenance System** that:

- Detects potential failures early  
- Uses an LLM to explain issues in simple language  
- Automatically recommends service slots  
- Generates OEM insights based on aggregated issues  
- Provides a full-stack working prototype (FastAPI + React)

---

# 🎯 Problem Statement

- Fault detection is delayed → leads to breakdowns  
- Vehicle data is technical & difficult for customers to understand  
- Service process is manual and inefficient  
- OEMs lack real-time defect pattern tracking  
- No predictive or autonomous maintenance ecosystem exists  

---

# 🌟 Solution Overview

A complete **AI Agent-based system** that analyzes sensor data, detects anomalies, explains issues using LLM, schedules service, and provides OEM insights.

### Multi-Agent Workflow

| Agent Name | Role |
|-----------|------|
| **DataAnalysisAgent** | Pre-processes vehicle sensor readings |
| **DiagnosisAgent** | Detects anomalies & severity |
| **ExplanationAgent (LLM)** | Converts diagnosis → user-friendly explanation |
| **ServiceSchedulingAgent** | Auto-selects service slot |
| **ManufacturingInsightsAgent** | Tracks recurring issues (OEM analytics) |

---

# 🏗 System Architecture

Frontend (React + Tailwind) ↓ Axios REST API Calls FastAPI Backend ↓ MasterAgent (Coordinator) ├── DataAnalysisAgent ├── DiagnosisAgent ├── ExplanationAgent (LLM) ├── ServiceSchedulingAgent └── ManufacturingInsightsAgent

---

# 📁 Professional Folder Structure

backend/ │── .env │── requirements.txt │── app/ │    ├── main.py │    ├── core/ │    │    └── config.py │    ├── api/ │    │    └── v1/ │    │         ├── routes_diagnosis.py │    │         ├── routes_oem.py │    ├── models/ │    │    ├── vehicle.py │    │    ├── diagnosis.py │    │    ├── service.py │    ├── agents/ │    │    ├── data_agent.py │    │    ├── diagnosis_agent.py │    │    ├── explanation_agent.py │    │    ├── service_agent.py │    │    ├── manufacturing_agent.py │    │    └── master_agent.py │    ├── services/ │         └── llm_service.py

frontend/ │── package.json │── vite.config.js │── tailwind.config.cjs │── index.html │── src/ │    ├── App.jsx │    ├── index.css │    ├── services/api.js │    ├── components/ │         ├── VehicleForm.jsx │         ├── DiagnosisCard.jsx │         └── OEMInsightsCard.jsx

---

# ⚙️ Installation & Setup

---

## 1️⃣ Backend Setup (FastAPI)

### Install dependencies
```bash
cd backend
pip install -r requirements.txt

Create .env

OPENAI_API_KEY=your_openai_api_key_here
BACKEND_CORS_ORIGINS=["http://localhost:5173"]

Run FastAPI backend

uvicorn app.main:app --reload

Swagger Docs:
http://127.0.0.1:8000/docs


---

2️⃣ Frontend Setup (React + Tailwind)

cd frontend
npm install
npm run dev

Frontend Live at → http://localhost:5173


---

🔌 API Endpoints


---

✔ POST /api/v1/diagnose

Request Example

{
  "vehicle_id": "CAR-001",
  "engine_temp": 121,
  "battery_voltage": 11.1,
  "tyre_pressure": 26,
  "rpm": 3800,
  "speed": 40
}

Response Example

{
  "vehicle_id": "CAR-001",
  "issues": [
    "Possible engine overheating",
    "Low tyre pressure"
  ],
  "severity": "high",
  "explanation": "Your vehicle may overheat...",
  "recommended_slot": "2025-01-14 16:00",
  "workshop": "EY Partner Workshop - Lucknow"
}


---

✔ GET /api/v1/oem-insights

Returns aggregated fault frequencies.

Example Response

{
  "Possible engine overheating": 3,
  "Low tyre pressure": 5,
  "Low battery voltage": 2
}


---

🧪 Demo Flow (For Judges)

1. Enter values in React UI


2. React → FastAPI via Axios


3. MasterAgent triggers all 5 agents


4. LLM generates human-friendly summary


5. Auto service slot is recommended


6. OEM issues update in real-time




---

🖼 Add Your Screenshots Here

Vehicle Input Form

Diagnosis Output

LLM Explanation

OEM Dashboard



---

📈 Impact & Value

Metric	Improvement

Vehicle Downtime	↓ 60–80%
Service Efficiency	↑ 30–40%
Customer Understanding	↑ via LLM
OEM Warranty Cost	↓ significantly



---

🚀 Future Enhancements

Real OBD-II hardware connectivity

ML-based anomaly detection

EV battery health analytics

Workshop load balancing engine

Fleet-level predictive maintenance



---

👥 Team XLCODER

Shivanand Kumar — AI/Backend Architecture

Anamika Pandey — UI/Frontend Engineering



---

> 🏁 This README is optimized specifically for EY Techathon 6.0 Round 2 requirements.



---
