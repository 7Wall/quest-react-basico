import React from "react";
import './text-transform.css'

function TextTransform ({content, color}) {
    return (
        <>
            <p className="textTransform" style={{textTransform: 'uppercase', color: color}}>{content}</p>
        </>
    )
}

export default TextTransform