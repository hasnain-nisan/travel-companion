import React from 'react';
import './app.css';
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

const App = () => {
  return (
      <div className="xl:container h-screen w-screen">
          <div className="flex flex-col h-full w-full justify-center">
            <div className="h-[10%] bg-blue-200">
                <Header />
            </div>
            <div className="h-[90%] flex divide-x-2 divide-black">
                <div className="w-2/5 h-full bg-red-100">
                    <List/>
                </div>
                <div className="w-3/5 h-full bg-indigo-100">
                    <Map/>
                </div>
            </div>
          </div>
      </div>
  )
};

export default App;
