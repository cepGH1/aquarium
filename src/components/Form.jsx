
import {useState} from 'react';
const Form = () =>{

    const [myFish, setMyFish]=useState({});

    const [myFishArray, setMyFishArray] = useState([]);

   
    const setFishData = (event) => {
        // pull the name and value attributes out of our event.target
        const {name, value} = event.target;

        setMyFish((prevValue) => ({  
           ...prevValue,            
           [name]: value,              
        }));
    };

    const addFishToArray = () => {
        
        setMyFishArray((prevArray) => {      // prevArray - Current value of our state
            return [...prevArray, myFish]; // Same thing as array.push, ignore all data and put this at the end
        });
        console.log("added");
        // this doesn't work 
        setMyFish({});
    };
    const useThatArray = () =>{
        const myNum = myFishArray.length;
        return myNum;
    };
    return(
 <div className="aquarium">
 
   <h3>Put a new fish in the aquarium</h3>
   <p>
       <label >Name : </label>
        <input type="text" id ="my-common-name" name="commonName" onChange={(event) => {setFishData(event)}}/>
   </p>
   <p>
    <label >Description : </label>
    <input type="text" id="my-description" name="description" onChange={(event) => {setFishData(event)}}/>
   </p>
   <p>
   <button type="button" onClick={addFishToArray}> save fish </button>
   </p>
   <p>
   <button type="button" onClick={() => console.log(myFishArray)}> fish </button>
   </p>
   
</div>
    );
};

export default Form;