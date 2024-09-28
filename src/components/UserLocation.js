// /frontend/src/components/UserLocation.js

import React, { useEffect } from "react";

const UserLocation = ({ onLocationChange }) => {
  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const location = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            onLocationChange(location);
          },
          (error) => {
            console.error("Error getting location:", error);
          },
          {
            enableHighAccuracy: true, // Request high accuracy
            timeout: 10000, // Increased timeout for better results
            maximumAge: 0, // No cache
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getUserLocation();
  }, [onLocationChange]);

  return null; // No UI, as the location is fetched automatically
};

export default UserLocation;
