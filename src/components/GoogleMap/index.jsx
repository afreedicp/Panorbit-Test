import React from 'react';
import GoogleMapReact from 'google-map-react';
const GoogleMap = ({ lat, lng }) => {
  const center = {
    lat: lat,
    lng: lng,
  };
  const zoom = 11;
  return (
    <div style={{ height: '200px', width: '200px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
