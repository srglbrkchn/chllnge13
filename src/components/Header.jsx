import React from "react";

function Header(props) {
    return (
        <div>
            <img className="headr-pic" src={props.src} alt={props.alt} />
        </div>
    );
}


export default Header; 
