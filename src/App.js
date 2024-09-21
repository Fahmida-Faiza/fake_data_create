import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import "./App.css";

const regionLocaleMap = {
  us: "en_US",
  pl: "pl",
  ge: "ka",
};

function App() {
  const [region, setRegion] = useState("us");
  const [errorRate, setErrorRate] = useState(0);
  const [seedValue, setSeedValue] = useState(1234);
  const [records, setRecords] = useState([]);
  const [currentBatch, setCurrentBatch] = useState(0);
  const batchSize = 20;

  // Setting the seed and locale whenever seed or region changes
  useEffect(() => {
    faker.seed(seedValue);
    faker.locale = regionLocaleMap[region];
    loadInitialRecords();
  }, [seedValue, region]);

  const loadInitialRecords = () => {
    setCurrentBatch(0);
    const newRecords = generateRecords(0, batchSize);
    setRecords(newRecords);
  };

  const generateRecords = (startIndex, count) => {
    let data = [];
    for (let i = startIndex; i < startIndex + count; i++) {
      data.push(generateRecord(i + 1));
    }
    return data;
  };

  const generateRecord = (index) => {
    const randomId = faker.string.uuid(); // Fixed usage of UUID
    const name = `${faker.person.firstName()} ${faker.person.middleName()} ${faker.person.lastName()}`;
    const address = `${faker.location.city()}, ${faker.location.streetAddress()}`;
    const phone = faker.phone.number();

    return {
      index,
      randomId,
      name: applyErrors(name),
      address: applyErrors(address),
      phone: applyErrors(phone),
    };
  };

  const applyErrors = (data) => {
    let modifiedData = data;
    if (Math.random() < errorRate) {
      const position = Math.floor(Math.random() * modifiedData.length);
      modifiedData =
        modifiedData.substring(0, position) +
        "#" +
        modifiedData.substring(position + 1);
    }
    return modifiedData;
  };


  const handleRandomSeed = () => {
    const randomSeed = Math.floor(Math.random() * 10000);
    setSeedValue(randomSeed);
  };

  return (
    <div className="container">
      <h1>Fake User Data Generator</h1>

      <div className="controls">
        <label>
          Select Region:
          <select value={region} onChange={(e) => setRegion(e.target.value)}>
            <option value="us">USA</option>
            <option value="pl">Poland</option>
            <option value="ge">Georgia</option>
          </select>
        </label>

        <label>
          Errors per Record:
          <input
            type="range"
            
            value={errorRate}
            onChange={(e) => setErrorRate(parseFloat(e.target.value))}
          />
          <input
            type="number"
      
            value={errorRate}
            onChange={(e) => setErrorRate(parseFloat(e.target.value))}
          />
        </label>

        <label>
          Seed Value:
          <input
            type="number"
            value={seedValue}
            onChange={(e) => setSeedValue(parseInt(e.target.value))}
          />
        </label>
        <button onClick={handleRandomSeed}>Random Seed</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Identifier</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.index}>
              <td>{record.index}</td>
              <td>{record.randomId}</td>
              <td>{record.name}</td>
              <td>{record.address}</td>
              <td>{record.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;

