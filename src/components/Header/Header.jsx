import React from 'react';
import {Autocomplete} from '@react-google-maps/api'
import {SiYourtraveldottv} from 'react-icons/si'


const Header = () => {
  return (
    <div class="fixed flex items-center justify-between w-full h-[10%] p-2 shadow-lg">
      <div className="flex flex-col sm:flex-row items-center px-3">
        <SiYourtraveldottv className="text-3xl font-bold text-black mr-1" />
        <h1 className="tracking-wide text-xl text-black">𝕿𝖗𝖆𝖛𝖊𝖑 𝕮𝖔𝖒𝖕𝖆𝖓𝖎𝖔𝖓</h1>
      </div>
      <div className="">
        <div class="bg-indigo-200 mr-4 w-50 h-10 space-x-4 rounded-lg flex items-center justify-center border border-gray-200 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 opacity-50 ml-[8px] md:ml-[15px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            class="bg-indigo-200 outline-none placeholder-gray-700 w-[145px] md:w-full"
            type="text"
            placeholder="𝘌𝘹𝘱𝘭𝘰𝘳𝘦 𝘵𝘩𝘦 𝘸𝘰𝘳𝘭𝘥"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
