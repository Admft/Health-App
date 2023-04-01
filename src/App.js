import React, { useState, useEffect } from 'react';
import './App.css';
import data from './data.json';

function App() {
  const [people, setPeople] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [filterBy, setFilterBy] = useState('');

  useEffect(() => {
    setPeople(data);
  }, []);

  const handleSort = (field) => {
    setSortBy(field);
    setPeople([...people].sort((a, b) => (a.person[field] > b.person[field]) ? 1 : -1));
  };

  const handleFilter = (disease) => {
    setFilterBy(disease);
    if (disease === '') {
      setPeople(data);
    } else {
      setPeople(data.filter((item) => item.person.disease === disease));
    }
  };

  return (
    <div className="App">
      <h1>Patients</h1>
      <div className="controls">
        <label>Sort by:</label>
        <select value={sortBy} onChange={(e) => handleSort(e.target.value)}>
          <option value="">--Select--</option>
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="duration_of_suffering">Duration of suffering</option>
        </select>
        <label>Filter by disease:</label>
        <select value={filterBy} onChange={(e) => handleFilter(e.target.value)}>
          <option value="">--Select--</option>
          <option value="Hypertension">Hypertension</option>
          <option value="Asthma">Asthma</option>
          <option value="Diabetes">Diabetes</option>
          <option value="Arthritis">Arthritis</option>
          <option value="Migraine">Migraine</option>
          <option value="Depression">Depression</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Disease</th>
            <th>Duration of Suffering</th>
            <th>Treatment</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.person.name}</td>
              <td>{person.person.age}</td>
              <td>{person.person.disease}</td>
              <td>{person.person.duration_of_suffering}</td>
              <td>{person.person.treatment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
