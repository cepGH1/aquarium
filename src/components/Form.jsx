
import {useState} from 'react';
const Form = () =>{

    const [myFish, setMyFish]=useState({});

    const [myFishArray, setMyFishArray] = useState([]);

   
    const setFishData = (event) => {
        // pull the name and value attributes out of our event.target
        const {name, value} = event.target;

        setMyFish((prevValue) => ({ // Taking the current value of setPizzaData and allowing JS to modify it
           ...prevValue,             // ... spread operator, ignore all of the previous attributes
           [name]: value,              // Set the key to be the input field name (name, number, address) : value 
                                     // number: "40478232839" - either going to put it at the end OR update the original number
        }))
    };

    const addFishToArray = () => {
        
        setMyFishArray((prevArray) => {      // prevArray - Current value of our state
            return [...prevArray, myFish]; // Same thing as array.push, ignore all data and put this at the end
        });
        
        // this doesn't work 
        setData({});
    };

    return(
 <div className="aquarium">
 
   <h3>Put a new fish in the aquarium</h3>
   <p>
       <label >Name : </label>
        <input type="text" name="commonName" onChange={(event) => {setFishData(event)}}/>
   </p>
   <p>
    <label >Description : </label>
    <input type="text" name="description" onChange={(event) => {setFishData(event)}}/>
   </p>
   <p>
   <button type="button" onClick="addFishToArray()"> save fish </button>
   </p>
</div>
    );
};

export default Form;