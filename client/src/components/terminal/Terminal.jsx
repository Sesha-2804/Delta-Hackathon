import axios from "axios";
import React from "react";
import { useState } from "react";
import './terminal.css'

export default function Terminal(props){
    const [input,setInput]=useState("")
    const setbackground=async(value)=>{
      
      
      console.log(value)
       const res= await axios.put("auth/updatecolor",{backgroundcolor:value},{
            headers: {
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        props.onchange(value)
        console.log(res);
    }

    return(
        <main id="container">
        <div id="terminal">
          
          <section id="terminal__bar">          
            <div id="bar__buttons">            
              <button class="bar__button" id="bar__button--exit">&#10005;</button>            
              <button class="bar__button">&#9472;</button>                
              <button class="bar__button">&#9723;</button>          
            </div>          
            <p id="bar__user">fobabs@ubuntu: ~</p>        
          </section>        
                 
          <section id="terminal__body">          
            <div id="terminal__prompt">            
              <span id="terminal__prompt--user">fobabs@ubuntu:</span>            
              <span id="terminal__prompt--location">~</span>            
              <span id="terminal__prompt--bling">$</span>            
              <input id="terminal__prompt--cursor" onChange={(event)=>{
                setInput(event.target.value)
              }} onKeyDown={(event)=>{
                if(event.key==="Enter"){
                    console.log("keypressed");
                    const [command,value]=input.split(" ")
                    
                    switch(command){
                        case 'setbackground':
                            console.log("setbackground pressed");
                            setbackground(value)
                        case 'settask':
                            // settask(value)
                        
                          
                            
                    }
                }
              }}/>          
            </div>        
          </section>      
        </div>    
      </main>
    )
}