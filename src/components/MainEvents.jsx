import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const MainEvents = () => {

    

  return (

    <div>
    <link rel="stylesheet" href="style.css"/>
    
    
    <div class="pooji">
            <nav>
            <ul>
                          <li><a href="/mainevents">Home</a></li>
                          {/* <li><a href="/home">Home</a></li> */}
                          <li><a href="/spi">Spirals</a></li>
                          <li><a href="/ry">Rythms</a></li>
                          <li><a href="/ac">AAC</a></li>
                          <li><a href="/ec">ECell</a></li>
                          <li><a href="/sp">Spices</a></li>
                          <li><a href="/login">Login</a></li>
            </ul>               
            </nav>
        </div>

        
        <div>
            <p>welcome to html text </p>
        </div>
            
    </div>   
  )
}



export default MainEvents