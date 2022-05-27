
import { useState, useEffect } from "react";
import axios from "axios";
import Beer from './Beer';


const Bar = () =>{
//create state as array of beers
    const [beerList, setBeerList] = useState([]);

    const[loaded, setLoaded] = useState(false);


    useEffect(() => {
        axios.get("https://api.punkapi.com/v2/beers").then(
            (response) => {
                console.log(response.data);
                setBeerList(response.data);
                
            }
        )
        setLoaded(true);
    }, []);

if(loaded){
    return(
 
 <div className="aquarium">
 
   <h2>The Aquarium Bar</h2>
   {
       beerList.map((beer) => {
            return <Beer data={beer}/>
       }

       )
   }
   
 
 
</div>
    );}else{return(<h2>Data Loading</h2>)};
};

export default Bar;