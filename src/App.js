import React, {useState, useEffect} from 'react';
import './app.css';
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

import {getPlacesData} from './api/index'

const App = () => {

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
        setCoordinates({lat: latitude, lng: longitude});
    })
  }, [])

  useEffect(() => {
    getPlacesData(bounds)
        .then((data) => {
            setPlaces(data)
            console.log(data)
        })
  }, [coordinates, bounds])

  return (
      <div className="h-screen w-screen m-0 p-0 ">
          <div className="flex flex-col h-full w-full justify-center">
            <div className="h-20 bg-indigo-500 shadow-xl">
                <Header />
            </div>
            <div className="overflow-auto w-full h-full flex flex-col-reverse md:flex-row">
                <div className="w-full md:w-2/6 h-2/6 md:h-full overflow-auto hide bg-indigo-400">
                    <List places={places}/>
                </div>
                <div className="w-full md:w-4/6 h-4/6 md:h-full bg-indigo-100">
                    <Map
                      setCoordinates={setCoordinates}
                      coordinates={coordinates}
                      setBounds={setBounds}
                    />
                </div>
            </div>
          </div>
      </div>
  )
};

export default App;
