import React from "react";

function Button ({label}){
    return <button className="btn" onClick={()=> alert(`A label deste botão é: ${label}`)}>Clique aqui</button>
}

export default Button