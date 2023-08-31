import React, { useState } from 'react';
import './App.css';

const Addon = ({ name, features }) => {
  console.log('Rendering Addon:', name);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="addon-item"> {/* Use addon-item class here */}
      <h2 onClick={() => setExpanded(!expanded)}>{name}</h2>
      {expanded && (
        <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index} className="features-list-item">
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Addon;
