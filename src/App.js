import React, {useState} from "react";
import './App.css';
import {metadata} from './metadata.const.js';
import Dropdown from "./components/Dropdown/Dropdown";
import DisplayList from "./components/DisplayList/DisplayList";

function App() {
    const [itemsToShow, setItemsToShow] = useState([])

    //Add id to each element of array
    for (let i = 0; i < metadata.length; i++) {
        metadata[i].id = i
    }

    const handleItems = (items) => {
        setItemsToShow(items)
    }

    return (
        <div className="App">
            <Dropdown sendItems={handleItems} items={metadata}/>
            <DisplayList items={itemsToShow}/>
        </div>
    );
}

export default App;
