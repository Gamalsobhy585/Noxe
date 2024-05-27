import axios from "axios";
import { createContext, useState, useEffect } from "react";

export let MediaContext = createContext("");

function MediaContextProvider(props) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingPeople, setTrendingPeople] = useState([]);

  async function getTrending(mediaType, callback) {
    try {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=ec0714adb1d9e5393ce7bd94814bcdba`
      );
      console.log(`Fetched trending ${mediaType}:`, data.results);
      callback(data.results);
    } catch (error) {
      console.error(`Error fetching trending ${mediaType}:`, error);
    }
  }

  useEffect(() => {
    console.log("Fetching trending data...");
    getTrending("movie", setTrendingMovies);
    getTrending("tv", setTrendingTv);
    getTrending("person", setTrendingPeople);
  }, []);

  return (
    <MediaContext.Provider value={{ trendingMovies, trendingTv, trendingPeople }}>
      {props.children}
    </MediaContext.Provider>
  );
}

export default MediaContextProvider;
