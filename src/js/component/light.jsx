import React from "react";

function Light ({className, onClick}) {
    return (        			
        <button 
        className={`d-inline-block rounded-circle m-3 bttn ${className}`}
        onClick={onClick}
        >

        </button>            
    )
}

export default Light;
