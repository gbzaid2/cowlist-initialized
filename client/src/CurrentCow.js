import React from 'react';


const CurrentCow = function(props){
    
    // if(props.cow){
    //     var name = <h4>{props.name}</h4>;
    //     var desc = <h4>{props.description}</h4>
    // } else {
    //     var name = "";
    //     var desc = "";
    // }
    if (!props.cow) return null;
    console.log("this is what was passed to currentcow", props);
    
    return (
        
        <div>
            <h4> {props.cow.cow_name} </h4>
            <h4> {props.cow.cow_description}</h4> 
        </div>
    );
}

export default CurrentCow