import React, { useState } from "react";
import UserLocation from "../components/UserLocation";
import TreatmentCenterList from "../components/TreatmentCenterList";
import LocationMap from "../components/LocationMap";

const HomeScreen = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: 33.6844, lng: 73.0479 }); // Default Islamabad center
  const [mapZoom, setMapZoom] = useState(13); // Default zoom level

  const updatedCenters = [
    {
      name: "Kiran Aamir - Clinical Psychologist",
      address:
        "Suit # 992, Street 92, I-8/4 I 8/4 I-8, Islamabad, Islamabad Capital Territory 44000",
      phone: "051-123-4567",
      email: "contact@kiranpsychologist.com",
      website: "http://kiranpsychologist.com",
      coordinates: { lat: 33.6844, lng: 73.0479 },
    },
    {
      name: "Dr Harmain (psychologist)",
      address:
        "House Number 1, Rehara House, New, Jinnah Ave, Rehara, Islamabad, Islamabad Capital Territory 54000",
      phone: "051-987-6543",
      email: "contact@drharmain.com",
      website: "http://drharmain.com",
      coordinates: { lat: 33.738045, lng: 73.084488 },
    },
    {
      name: "PsychCare | Dr. Semra Salik - Consultant Clinical Psychologist | Psychotherapist",
      address:
        "First Floor, Time Square Plaza, Office 1, G-8 Markaz, Islamabad",
      phone: "051-345-6789",
      email: "contact@psychcare.com",
      website: "http://psychcare.com",
      coordinates: { lat: 33.7066, lng: 73.0551 },
    },
    {
      name: "Karachi Treatment Center",
      address:
        "9-c, Sunset Commercial Street #1, Phase 2 Ext Defence Housing Authority, Karachi, Karachi City, Sindh 75500, Pakistan",
      phone: "021-123-4567",
      email: "contact@newcenter.com",
      website: "http://newcenter.com",
      coordinates: { lat: 24.8607, lng: 67.0011 },
    },
    {
      name: "Samad Khan Psychologist In Lahore",
      address: "54/2 Lane 1, Block A Model Town, Lahore, Punjab",
      phone: "0300-123-4567",
      email: "contact@samadpsychologist.com",
      website: "http://samadpsychologist.com",
      coordinates: { lat: 31.584745068399844, lng: 74.31923408091777 },
    },
  ];

  // Extract markers for the LocationMap
  const markers = updatedCenters.map((center) => ({
    position: center.coordinates,
    description: center.name,
  }));

  // Handle the center selection and zoom in
  const handleCenterSelect = (coordinates) => {
    setMapCenter(coordinates); // Set the selected center coordinates
    setMapZoom(16); // Zoom in closer to the selected center
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to the GPS App</h1>
      <UserLocation onLocationChange={setUserLocation} />
      <LocationMap
        center={mapCenter}
        zoom={mapZoom}
        markers={markers} // Pass markers here
        onCenterSelect={handleCenterSelect}
      />
      <TreatmentCenterList
        centers={updatedCenters}
        onCenterSelect={handleCenterSelect}
      />
    </div>
  );
};

export default HomeScreen;
