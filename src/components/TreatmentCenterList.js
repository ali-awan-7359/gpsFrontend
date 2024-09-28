import React from "react";

const TreatmentCenterList = ({ centers, onCenterSelect }) => {
  return (
    <div className="w-full mx-auto mt-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {centers.map((center, index) => (
          <li
            key={index}
            onClick={() => {
              console.log("Selected center:", center.coordinates); // Debugging line
              onCenterSelect(center.coordinates);
            }}
            className="cursor-pointer p-6 mb-4 bg-blue-100 hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out rounded-lg shadow-lg hover:scale-105 transform"
          >
            <h2 className="text-xl font-bold mb-2">{center.name}</h2>
            <p>{center.address}</p>
            <p className="mt-2 text-sm text-gray-700">{center.phone}</p>
            <p className="text-sm text-gray-500">{center.email}</p>
            <a
              href={center.website}
              className="text-blue-500 hover:text-blue-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {center.website}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TreatmentCenterList;
