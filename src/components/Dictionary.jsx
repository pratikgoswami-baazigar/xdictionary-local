import React, { useState } from 'react';


const Dictionary = () => {
const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const foundEntry = dictionary.find(
      entry => entry.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (foundEntry) {
      setResult(foundEntry.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px', maxWidth: '500px' }}>
      <h2>Dictionary App</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search for a word..."
        style={{ padding: '8px', width: '70%' }}
      />
      <button
        onClick={handleSearch}
        style={{ padding: '8px 16px', marginLeft: '8px' }}
      >
        Search
      </button>

      <div style={{ marginTop: '20px' }}>
  <h3>Definition:</h3>
  {result && result !== "Word not found in the dictionary." && (
    <p>{result}</p>
  )}
  {result === "Word not found in the dictionary." && (
    <p>{result}</p>
  )}
</div>


      
    </div>
  );
}

export default Dictionary;