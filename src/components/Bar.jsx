
import { useState, useEffect } from "react";
import axios from "axios";
import Beer from './Beer';


const Bar = () =>{
//create state as array of beers
    const [beerList, setBeerList] = useState([]);

    const[loaded, setLoaded] = useState(false);

    const[name, setName] = useState("");


    useEffect(() => {
        axios.get("https://api.punkapi.com/v2/beers").then(
            (response) => {
                console.log(response.data);
                setBeerList(response.data);
                
            }
        )
        setLoaded(true);
    }, []);

    const postData = () => {
        axios.post("https://reqres.in/api/users?page=2", {name:"clare", job: "junior"}).then(
            (response) => {console.log(response);}
        )
    }

if(loaded){
    return(
 
 <div className="aquarium">
 
   <h2>The Aquarium Bar</h2>
   <button type="button" onClick={postData}>post</button>
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