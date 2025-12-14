import axios from "axios";

const api = axios.create({
  baseURL: "https://ey-hackathon-backend.vercel.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const diagnoseVehicle = (payload) =>
  api.post("/diagnose", payload);

export const fetchOEMInsights = () =>
  api.get("/oem/insights");

export default api;
