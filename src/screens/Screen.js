// /frontend/src/screens/Screen.js

import React from "react";
import SampleComponent from "../components/SampleComponent";

const Screen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Screen</h1>
      <SampleComponent />
    </div>
  );
};

export default Screen;
