import {Link} from 'react-router-dom';

const Nav = () =>{

    return(
 <div className="aquarium">
 
   <h2>The Aquarium Nav Page</h2>
   <Link to="/about">
         <b>About </b> 
    </Link>
    ---
    <Link to="/">
         <b>Home </b>
    </Link>
    ---
    <Link to="/fish">
         <b>Fish Search Form </b>
    </Link>
    ---
    <Link to="/bar">
         <b>The aquarium bar </b>
    </Link>
    ---
    <Link to="/cinema">
         <b>The aquarium cinema </b>
    </Link>
 
 
</div>
    );
};

export default Nav;