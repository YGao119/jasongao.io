import React, {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';


function Navbar(){
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
    useEffect(() => { setExpandNavbar(false)}, [location]);
    
    return (
    <div className="navbar" id={ expandNavbar ? "open" : "close"}>  
        {/*<FontAwesomeIcon className="logo" icon={faCloud}></FontAwesomeIcon>*/}
        <div className="toggleButton">
            <button 
                onClick={() => {
                    setExpandNavbar(!expandNavbar);
                }}
            >
                <FontAwesomeIcon className="faBars" icon={faBars}/>
            </button>
        </div>
        <div className="links">
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/experience'>Education</Link>
        </div>
    </div>
    );
}

export default Navbar;