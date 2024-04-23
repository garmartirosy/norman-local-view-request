import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [zipCode, setZipCode] = useState("");
  const [issues, setIssues] = useState([]);

  const updateZipHash = async () => {
    window.location.hash = `${zipCode}`;

    try {
      const response = await axios.get(
        `https://seeclickfix.com/api/v2/issues?search[place_url]=${zipCode}&per_page=10`
      );
      console.log(response.data.issues); 
      setIssues(response.data.issues); 
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (zipCode.length === 5) {
      updateZipHash();
    }
  }, [zipCode]);

  return (
    <div
      className="container mx-auto p-5"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <label htmlFor="zipCode" className="block mb-2">
        Enter Zip Code:
      </label>
      <input
        type="text"
        id="zipCode"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        maxLength={5}
        className="border-black border-2 p-2 mb-2" 
      />
      <button onClick={updateZipHash} className="bg-blue-500 text-white p-2">
        Search
      </button>
      {issues.map((issue) => (
        <div key={issue.id} className="py-2">
          {" "}
          
          <h2 className="py-2">{issue.summary}</h2> 
          <p className="py-2">{issue.description}</p> 
          <p className="py-2">{issue.address}</p> 
          <a
            href={issue.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="border-blue-500 border-2 p-2 inline-block" 
          >
            View Details
          </a>
          {issue.media_url && <img src={issue.media_url} alt={issue.summary} />}
        </div>
      ))}
    </div>
  );
}

export default App;
