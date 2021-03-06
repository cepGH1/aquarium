import axios from "axios";

const Beer = ({data}) =>{
    const{name, abv, image_url, food_pairing} = data;

const deleteObj = () => {
    axios.delete("https://reqres.in/api/users/2").then(
    (response) => {
        console.log(response);
    }
    )
}

    return(
 <div className="aquarium">
 
   
   <h2> {name}</h2>
   <img src={image_url} alt={name} height="100px"/>
   <h3> ABV: {abv} </h3>
            <ol>Good to eat with :
            {
                food_pairing.map((food) => {
                    return (<li> {food} </li>)
                })
            } 
            </ol>
   
            <button type="button" onClick={deleteObj}>delete test</button>
 
</div>
    );
};

export default Beer;