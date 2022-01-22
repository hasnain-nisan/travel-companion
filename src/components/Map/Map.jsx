import React from 'react';
import GoogleMapReact from 'google-map-react'

const Map = () => {

  const coordinates = { lat: 0, lng:0 }

  return (
    <div className="h-full w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCVMIo8s59eWc8bEGCL3f9IlBAKMOK1gGw" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;