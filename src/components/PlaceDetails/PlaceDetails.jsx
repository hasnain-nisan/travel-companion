import React from 'react';

const PlaceDetails = ({place}) => {
  return (
    <div className="px-1 py-4">
      <h1>{place.name}</h1>
    </div>
  )
};

export default PlaceDetails;
