import React from 'react';
import './App.css';
import Converter from "./components/RomanNumeralConverter/Converter";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <span>
          Roman Numerals Converter
        </span>        
      </div>
			<Converter />
    </div>
  );
}

export default App;
