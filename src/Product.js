import React, { useState } from 'react';
import './App.css';

const Product = ({ name, features }) => {
  console.log('Rendering Product:', name);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="product-item">
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

export default Product;
