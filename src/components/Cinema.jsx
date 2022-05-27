
import { useState, useEffect } from "react";
import axios from "axios";
import Movie from './Movie';


const Cinema = () =>{
//create state as array of beers
    const [movieList, setMovieList] = useState([]);

    const[loaded, setLoaded] = useState(false);


    useEffect(() => {
        axios.get("localhost:5015/movie/getAll").then(
            (response) => {
                console.log(response.data);
                setMovieList(response.data);
                
            }
        )
        setLoaded(true);
    }, []);

if(loaded){
    return(
 
 <div className="aquarium">
 
   <h2>The Aquarium Flick</h2>
   {
       beerList.map((movie) => {
            return <Movie data={movie}/>
       }

       )
   }
   
 
 
</div>
    );}else{return(<h2>Data Loading</h2>)};
};

export default Cinema;