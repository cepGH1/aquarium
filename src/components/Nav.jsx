import {Link} from 'react-router-dom';

const Nav = () =>{

    return(
 <div className="aquarium">
 
   <h2>The Aquarium Nav Page</h2>
   <Link to="/about">
         About 
    </Link>
    :::
    <Link to="/">
         Home :
    </Link>
    :::
    <Link to="/fish">
         Fish search form 
    </Link>
 
 
</div>
    );
};

export default Nav;