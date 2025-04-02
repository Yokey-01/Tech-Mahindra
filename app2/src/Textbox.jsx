import { useState } from "react";

export function Textbox(){
    const[value,setValue]=useState("");
    function handleChange(e){
        setValue(e.target.value);
    }
    return(
        <>
        <input type="text" name="textbox" onChange={handleChange} value={value}/>
        <p>{value}</p>
        </>
    );
}