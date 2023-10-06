import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';

export default function PropertyList() {
  const url =
    'https://raw.githubusercontent.com/chiranjeevsehgal/Lab-Ex.10-JSON-File/main/properties.json';
    

  const [data, setData] = useState([]);

  useEffect(() => {
    async function makeRequest() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    makeRequest();
  }, []);

  return (
    <div className="container">
      <div className="row" style={{ margin: 'auto', paddingLeft: '112px' }}>
        {data.map((property) => (
          <PropertyCard
            key={property.id}
            name={property.name}
            type={property.type}
            location={property.location}
          />
        ))}
      </div>
    </div>
  );
}
