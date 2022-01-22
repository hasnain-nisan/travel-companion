import React from 'react';

const PlaceDetails = ({place}) => {
  return (
    <div className="mb-5 w-full flex items-center justify-center">
      <div class="w-full bg-white shadow-md border border-gray-200 rounded-lg max-w-md dark:bg-gray-800 dark:border-gray-700">
          <img 
            className="rounded-t-lg h-[300px] w-full object-cover" 
            src={place?.photo ? place.photo.images.large.url : "https://flowbite.com/docs/images/blog/image-1.jpg"} 
            alt=""
          />
          <div class="p-4">
            <h5 class="text-gray-900 font-bold text-xl tracking-tight mb-2 dark:text-white">
              {place?.name}
            </h5>
            <div className='flex flex-col space-y-2'>
              <div className='flex justify-between'>
                <span className='text-sm font-bold text-gray-800'>Price</span>
                <span className='text-sm font-bold text-gray-600'>{place?.price_level ? place.price_level : "N/A"}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-sm font-bold text-gray-800'>Ranking</span>
                <span className='text-sm font-bold text-gray-600'>{place?.ranking ? place.ranking : "N/A"}</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
};

export default PlaceDetails;
