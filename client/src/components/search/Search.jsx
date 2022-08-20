import React from "react";
import './search.css';
import { Link } from "react-router-dom";

export default function Search(){
    return(
        <div className="mainContainer">
            <div className="mainWrapper">
                <form action="https://www.google.com/search" class="searchform" method="post" name="searchform" target="_blank">
                    <input type="hidden"/>
                    <input autocomplete="on" class="form-control search" name="q" placeholder="Search" required="required"  type="text" className="searchbar"/>
                    <button className="searchButton" type="submit">Search</button>
                </form>
            </div>
        </div>
    )
    
}