import React from 'react';
import GoogleMapReact from 'google-map-react'

const Map = ({ setCoordinates, coordinates, setBounds }) => {

  return (
    <div className="h-full w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCVMIo8s59eWc8bEGCL3f9IlBAKMOK1gGw" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({lat: e.center.lat, lng: e.center.lng})
          setBounds({ ne:e.marginBounds.ne, sw:e.marginBounds.sw })
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;