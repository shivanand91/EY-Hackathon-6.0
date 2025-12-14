import WorkshopCard from "./WorkshopCard";

const workshops = [
  {
    id: "WS-101",
    name: "AutoCare Plus",
    rating: 4.6,
    distance: "2.1 km",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952"
  },
  {
    id: "WS-102",
    name: "RapidFix Motors",
    rating: 4.4,
    distance: "3.4 km",
    image: "https://images.unsplash.com/photo-1613214149922-f1809c99b414"
  },
  {
    id: "WS-103",
    name: "Prime Auto Hub",
    rating: 4.7,
    distance: "4.2 km",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
  },
  {
    id: "WS-104",
    name: "OEM Service Center",
    rating: 4.8,
    distance: "5.0 km",
    image: "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb"
  }
];

const WorkshopList = ({ diagnosis }) => {
  if (!diagnosis) return null;

  return (
    <div className="mt-6">
      <h3 className="text-sm font-semibold text-yellow-300 mb-3">
        Nearby Authorized Workshops
      </h3>

      {/* 👇👇 YE WAHI DIV HAI JISME SCROLL HOGA */}
      <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar cursor-grab active:cursor-grabbing">
        {workshops.map((ws) => (
          <WorkshopCard
            key={ws.id}
            workshop={ws}
            diagnosis={diagnosis}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkshopList;
