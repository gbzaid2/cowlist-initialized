import React from 'react';

var Cow = function(props){
    return (
        <div>
            <a href = "#"><p onClick = {props.handleClick}>{props.cow.cow_name}</p></a>
            <input type = "button" value = "edit" onClick = {() => props.editCow(props.cow.id)} />
            <input type = "button" value = "delete" onClick = {() => props.deleteCow(props.cow.id)} />
        </div>
    )
}


export default Cow;