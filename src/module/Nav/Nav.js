import React from 'react';
import {Kotak} from '../Nav/style';

function Nav() {
    return (
        <>
        <Kotak>
             
            
            <img className="logo" src={require('./pokemon.jpg').default} /> 
            <div className="nav">
                
                <a href="#"><img src={require('./pikachu.png').default} />Home</a>
                <a href="#"><img src={require('./pokeball.png').default} />My pokemon</a>
                <a href="#"><img src={require('./search.png').default} />Search</a>                
            </div>
        
        
        </Kotak>
        </>
    );
  }
  
  export default Nav;
  