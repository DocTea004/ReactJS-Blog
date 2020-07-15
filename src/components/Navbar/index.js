import React,{useState} from "react";
import "./style.css";
import {NavLink} from "react-router-dom";


const Navbar=(props)=>{

    const [search,setSearch]=useState(false);

    const openSearch=()=>{
        setSearch(true);
    }

    const submitSearch=(e) => 
    { 
        e.preventDefault(); 
        alert("Searched");
    }

    const searchClass= search? 'searchinput active': 'searchinput'  ;
    
    return(
        <div className="navbar">
            <ul className="navbarmenu">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about-us">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact-us">Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to="/post">Posts</NavLink>
                </li>
            </ul>

            <div className="search">
                <form onSubmit={submitSearch}>
                <input type="text" placeholder="Search" className={searchClass} />
                <img className="searchicon" onClick={openSearch} src={require("../../assets/icon/search.png")} alt="Search" />
                </form>
            </div>

        </div>
    )
}


export default Navbar;