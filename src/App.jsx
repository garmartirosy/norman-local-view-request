import React, { useState } from "react";

function App() {
  const [zipCode, setZipCode] = useState("");

  const updateZipHash = () => {
    window.location.hash = `zip=${zipCode}`;
    // You would also trigger the API call here
  };

  return (
    <div className="container mx-auto p-5">
      <label htmlFor="zipCode" className="block mb-2">
        Enter Zip Code:
      </label>
      <input
        type="text"
        id="zipCode"
        name="zipCode"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        className="w-full p-2 mb-2 border border-gray-300"
      />
      <button
        onClick={updateZipHash}
        className="p-2 bg-blue-500 text-white cursor-pointer"
      >
        Update
      </button>
      <div id="requestList" className="mt-5">
        {/* Requests would be listed here */}
      </div>
    </div>
  );
}

export default App;
