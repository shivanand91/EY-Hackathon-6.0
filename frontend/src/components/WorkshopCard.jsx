import api from "../services/api";

const WorkshopCard = ({ workshop, diagnosis }) => {
  const bookService = async () => {
    const payload = {
      vehicleId: diagnosis.vehicleId,
      issues: diagnosis.issues,
      severity: diagnosis.severity,
      workshopId: workshop.id
    };

    try {
      await api.post("/service/book", payload);
      alert(`Service booked with ${workshop.name}`);
    } catch (err) {
      alert("Booking failed");
    }
  };

  return (
    <div className="min-w-[200px] bg-slate-950 border border-slate-800 rounded-xl p-3 flex flex-col snap-start">
      <img
        src={workshop.image}
        alt={workshop.name}
        className="h-24 w-full rounded-lg object-cover"
      />

      <div className="mt-2 flex-1">
        <h4 className="text-sm font-semibold text-slate-100">
          {workshop.name}
        </h4>

        <p className="text-xs text-slate-400">
          ⭐ {workshop.rating} • {workshop.distance}
        </p>
      </div>

      <button
        onClick={bookService}
        className="mt-3 py-1.5 rounded-lg bg-yellow-400 text-slate-900 text-xs font-semibold hover:bg-yellow-300 transition"
      >
        Book Now
      </button>
    </div>
  );
};

export default WorkshopCard;
