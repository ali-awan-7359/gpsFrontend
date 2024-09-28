// /frontend/src/components/MapScreen.js

import React, { useState, useEffect } from "react";
import LocationMap from "../components/LocationMap";

const MapScreen = () => {
  const [centers, setCenters] = useState([]);

  const mockCenters = [
    {
      name: "Center A",
      address: "123 Main St",
      phone: "123-456-7890",
      email: "contact@centera.com",
      website: "http://centera.com",
      coordinates: { lat: 37.7749, lng: -122.4194 },
    },
    {
      name: "Center B",
      address: "456 Elm St",
      phone: "987-654-3210",
      email: "contact@centerb.com",
      website: "http://centerb.com",
      coordinates: { lat: 37.7849, lng: -122.4094 },
    },
  ];

  useEffect(() => {
    setCenters(mockCenters); // Populate centers when component mounts
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-4">Map View</h1>
      <LocationMap
        center={{ lat: 37.7749, lng: -122.4194 }}
        zoom={13}
        markers={centers.map((center) => ({
          position: [center.coordinates.lat, center.coordinates.lng],
          description: center.name,
        }))}
      />
    </div>
  );
};

export default MapScreen;
