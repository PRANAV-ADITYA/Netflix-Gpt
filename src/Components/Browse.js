import { useEffect } from "react";
import { API_Opts } from "../utils/Constants";
import Header from "./Header";
const Browse = () => {

const getNowPlayingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_Opts);
        const json = await data.json();
        console.log(json.results);
    }
   

    useEffect(
        () => {getNowPlayingMovies()},
        []
    );
    
    return (
        <div>
         <Header/>
        </div>
    )
}

export default Browse;