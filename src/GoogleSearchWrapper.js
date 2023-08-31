import React, { useEffect } from 'react';

const GoogleSearchWrapper = () => {
  useEffect(() => {
    // Load the Google Custom Search script
    const script = document.createElement('script');
    script.src = 'https://cse.google.com/cse.js?cx=84c30c823f21d4a1f';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up: Remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="gcse-search">
      {/* Add a custom placeholder text */}
      <input type="text" className="gsc-input" placeholder="Get your answers here!" />
    </div>
  );
};

export default GoogleSearchWrapper;
