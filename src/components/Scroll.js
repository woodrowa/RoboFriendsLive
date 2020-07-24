import React from "react";

//Scroll can use children as a way to render its children
//every props object has children
//using props.children we can create components that wrap other custom components
//in jsx you can add styles using double curly brackets {{}}
//which is a javascript expression which returns an object can have css styles
const Scroll = (props) =>{
    return (
        <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;