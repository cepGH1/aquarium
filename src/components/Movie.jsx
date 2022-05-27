const Movie = ({data}) =>{
    const{name, abv, image_url, food_pairing} = data;



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
   
 
 
</div>
    );
};

export default Movie;