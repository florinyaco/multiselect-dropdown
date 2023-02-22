import React from "react";
import {useState} from "react";
import DropdownItem from "./DropdownItem";
import classes from './Dropdown.module.css';

let selectedItems = [];

function Dropdown(props) {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleAddItem = (id) => {
        selectedItems = [...selectedItems, props.items.find(item => item.id === parseInt(id))]
        props.sendItems(selectedItems)
    }

    const handleRemoveItem = (id) => {
        selectedItems = selectedItems.filter((item) => {
            return item.id !== parseInt(id)
        })
        props.sendItems(selectedItems)
    }

    return (
        <>
            {/*dropdown trigger*/}
            <div className={classes.dropdown} onClick={() => {
                setShowDropdown(!showDropdown)
            }}>
                Metadata
            </div>

            {/*dropdown box*/}
            <ul className={showDropdown ? classes['dropdown-box'] : classes.hidden}>
                {props.items.map(item =>
                    <DropdownItem
                        key={item.id}
                        addItemToList={handleAddItem}
                        removeItemFromList={handleRemoveItem}
                        id={item.id}
                        name={item.name}/>)}
            </ul>
        </>
    )
}

export default Dropdown