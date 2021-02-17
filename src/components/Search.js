import React from 'react'; 
import '../styles/Search.css';

export default function Search({setSearch}) {
    return(
        <div className="search-container">
            <input type="text" placeholder="Machine name" onChange={setSearch}/>
        </div>
    )
}