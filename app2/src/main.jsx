import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toggle } from './Toggle.jsx'
import { Textbox } from './Textbox.jsx'
import List from './List.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Toggle /> */}
    <Textbox />
    {/* <List /> */}
  </StrictMode>
)
