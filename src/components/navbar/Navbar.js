import React from 'react';
import "./Navbar.css" 
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProductList from './components/productList/ProductList';


//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className = "container">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon= {faBars} style= {{color: "rgb(161, 134, 70)"}}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href={Intro} >Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={About} >About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={ProductList} >Publication</a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link" href={Contact} >Contacts</a>
            </li>
          </ul>
        </div>
</div>
      </nav>

    )
}

export default Navbar
