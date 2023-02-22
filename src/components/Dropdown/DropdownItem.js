import React from "react";
import classes from './DropdownItem.module.css';

function DropdownItem(props) {
    const selectItem = (event) => {
        event.target.checked ? props.addItemToList(event.target.id) : props.removeItemFromList(event.target.id)
    }
    return (
        <li className={classes['dropdown-item']}>
            <input type="checkbox" id={props.id} onClick={selectItem}/>
            <label htmlFor={props.id}>{props.name}</label>
        </li>
    )
}

export default DropdownItem