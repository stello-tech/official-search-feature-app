import React from "react";

const Scroll = (props) => {
    console.log("--------------------------------------------------------------------");
    console.log(props.children);
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '700px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;