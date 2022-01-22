import React, {useState} from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import {BsCaretDownFill} from 'react-icons/bs'

const List = ({places}) => {

  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState(0);

  return (
    <div className="relative h-full w-full px-4">
      <div className="hidden sticky top-[0px] bg-indigo-400 md:flex flex-col py-5">
        {/* <h1 className="text-xl font-medium text-gray-800">
          𝙍𝙚𝙨𝙩𝙖𝙪𝙧𝙖𝙣𝙩𝙨, 𝙃𝙤𝙩𝙚𝙡𝙨, 𝘼𝙩𝙩𝙧𝙖𝙘𝙩𝙞𝙤𝙣𝙨 𝙖𝙧𝙤𝙪𝙣𝙙 𝙮𝙤𝙪
        </h1> */}
        <div className="mt-0 flex space-x-5 justify-between w-full">
          <div className="w-1/2">
            <label htmlFor="type">𝘛𝘺𝘱𝘦</label>
            <select
              onChange={(e) => setType(e.target.value)}
              value={type}
              id="country"
              autocomplete="country"
              class="mt-1 mx w-full block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels</option>
              <option value="attraction">Attraction</option>
            </select>
          </div>
          <div className="w-1/2">
            <label htmlFor="rating">𝘙𝘢𝘵𝘪𝘯𝘨</label>
            <select
              onChange={(e) => setRating(e.target.value)}
              value={rating}
              id="rating"
              autocomplete="country"
              class="mt-1 mx w-full block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value={0}>All</option>
              <option value={3}>Above 3.0</option>
              <option value={4}>Above 4.0</option>
              <option value={4.5}>Above 4.5</option>
            </select>
          </div>
        </div>
      </div>

      <div className="block md:hidden sticky top-[0px]">
        <BsCaretDownFill className="text-3xl"/>
      </div>

      <div className="mt-10 overflow-auto flex flex-row md:flex-col">
        {places.map((place, i) => (
          <div key={i}>
            <PlaceDetails place={place}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;