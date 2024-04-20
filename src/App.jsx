import React, { useState } from "react";
import axios from "axios";

function App() {
  const [zipCode, setZipCode] = useState("");

  const updateZipHash = async () => {
    window.location.hash = `${zipCode}`;

    try {
      const response = await axios.get(
        `https://seeclickfix.com/api/v2/issues?search[place_url]=${zipCode}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-5">
      <label htmlFor="zipCode" className="block mb-2">
        Enter Zip Code:
      </label>
      <input
        type="text"
        id="zipCode"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        style={{
          border: "1px solid black",
          padding: "10px",
          marginBottom: "10px",
        }} // 添加这一行
      />
      <button onClick={updateZipHash}>Search</button>
    </div>
  );
}

export default App;
