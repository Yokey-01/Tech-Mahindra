import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Greeting } from './Greeting.jsx'
import.meta.env.BASE_URL

function Gallery(){
    return(
    <div><img src="/download.jpg" alt="greetings">
    </img>
    <Greeting />
    
    </div>
    );
}
export default Gallery;
