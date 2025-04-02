import { useState } from "react"

export function Toggle(){
    const [color,setColor]=useState('black');
    const [bgcolor,setBgColor]=useState('white');
    function Theme(){
        if((color==='black') && (bgcolor==='white')){
            setColor('white');
            setBgColor('black');
        }
        else {
            setBgColor('white');
            setColor('black');
        }
    }
    return(
        <>
        <div style={{backgroundColor:bgcolor}}>
        <h1 style={{color:color}}>Kavin🃏</h1>
        <button onClick={Theme}>Click to Toggle</button>
        </div>
        </>
    );
}