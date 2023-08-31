import React, { useRef, useEffect, useState } from 'react';

const Changelog = ({ entries, onClick, continuousScroll }) => {
  const changelogRef = useRef(null);

  useEffect(() => {
    const changelogContainer = changelogRef.current;
    const totalContentHeight = changelogContainer.scrollHeight;
    let scrolled = 0;

    const interval = setInterval(() => {
      if (continuousScroll) {
        changelogContainer.scrollTop = scrolled;
        scrolled += 1;

        if (scrolled >= totalContentHeight) {
          scrolled = 0;
        }
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [continuousScroll]);

  return (
    <div className={`section changelog ${continuousScroll ? 'clicked' : ''}`} onClick={onClick}>
      <h2 className="section-heading">Changelog</h2>
      <div className={`changelog-list ${continuousScroll ? 'changelog-list-scrollable' : ''}`} ref={changelogRef}>
        <div className="changelog-content">
          {entries.map((entry, index) => (
            <div key={index} className="changelog-item">
              <h3 className="changelog-item-heading">{entry.version}</h3>
              <p className="changelog-item-description">{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Changelog;
