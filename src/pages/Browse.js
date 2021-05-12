import React from "react";
import BrowserItem from "../components/BrowserItem";


function Browse() {
    return (
        <div>
            <h2>Browse</h2>
            <p>Filter</p>
            <BrowserItem title="Titel des Programms"/>
            <BrowserItem />
            <BrowserItem />
            <BrowserItem />
            <BrowserItem />
        </div>
    );
}

export default Browse;