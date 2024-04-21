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
      console.log(response.data.issues); // 打印响应数据来查看其结构
      setIssues(response.data.issues); // 根据响应数据的结构来访问问题数组
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
        style={{
          border: "1px solid black",
          padding: "10px",
          marginBottom: "10px",
        }}
      />
      <button onClick={updateZipHash}>Search</button>
      {issues.map((issue) => (
        <div key={issue.id}>
          <h2>{issue.summary}</h2>
          <p>{issue.description}</p>
          <p>{issue.address}</p> 
          <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
            View Details
          </a>
          {issue.media_url && <img src={issue.media_url} alt={issue.summary} />}
        </div>
      ))}
    </div>
  );
}

export default App;
