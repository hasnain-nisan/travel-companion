import axios from 'axios'

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

export const getPlacesData = async (bounds) => {
    try {
        const { data: {data} } = await axios.get(URL, {
          params: {
            bl_latitude: bounds.sw.lat,
            tr_latitude: bounds.ne.lat,
            bl_longitude: bounds.sw.lng,
            tr_longitude: bounds.ne.lng,
          },
          headers: {
            "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
            "x-rapidapi-key": "5f4352bf55msh93f4ddf8134d654p180864jsn2dfaeb1cbd43",
          },
        })
        return data
    } catch (error) {
        console.log(error)
    }
}