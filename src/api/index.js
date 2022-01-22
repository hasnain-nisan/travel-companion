import axios from 'axios'

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": "5f4352bf55msh93f4ddf8134d654p180864jsn2dfaeb1cbd43",
  },
};

export const getPlacesData = async () => {
    try {
        const { data: {data} } = await axios.get(URL, options)
        return data
    } catch (error) {
        console.log(error)
    }
}