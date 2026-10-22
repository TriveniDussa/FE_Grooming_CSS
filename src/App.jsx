
import React from 'react';
import './App.css';
import pro from './assets/pro.webp';

function App() {
  return (
    <div className="card">
      <img src={pro} alt="Profile" className="image" />
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Beatae totam itaque labore debitis perferendis amet molestias
        officia veniam voluptate ducimus.
      </p>
    </div>
  );
}

export default App;