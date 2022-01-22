import React from 'react';
import './app.css';
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

const App = () => {
  return (
      <div className="h-screen w-screen m-0 p-0 ">
          <div className="flex flex-col h-full w-full justify-center">
            <div className="h-[10%] bg-indigo-300">
                <Header />
            </div>
            <div className="h-[90%] flex flex-col md:flex-row divide-x-2 divide-black">
                <div className="w-full md:w-2/5 h-full bg-red-100">
                    <List/>
                </div>
                <div className="w-full md:w-3/5 h-full bg-indigo-100">
                    <Map/>
                </div>
            </div>
          </div>
      </div>
  )
};

export default App;
