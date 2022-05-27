const Beer = ({data}) =>{
    const{name, abv, image_url, food_pairing} = data;



    return(
 <div className="aquarium">
 
   
   <h2> {name}</h2>
   <img src={image_url} alt={name} height="100px"/>
   
 
 
</div>
    );
};

export default Beer;