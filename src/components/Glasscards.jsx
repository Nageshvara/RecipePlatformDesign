import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './Glasscards.css';

function Tilt({ options, ...rest }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, options);
  }, [options]);

  return <div ref={tiltRef} {...rest} />;
}

function Glasscards({ chefs }) {
  const tiltOptions = {
    scale: 1.2,
    speed: 1000,
    max: 30,
  };

  return (
    <div className="container">
      {chefs.map((chef, index) => (
        <Tilt key={index} className="card" options={tiltOptions}>
          <div className="box">
            <div className="content">
              <img src={chef.image} alt={chef.name} className="chef-image" />
              <h3>{chef.name}</h3>
              <h3>{chef.specialty}</h3>
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  );
}

export default Glasscards;
