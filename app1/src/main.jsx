import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Gallery from './App.jsx'
import Profile from './Profile.jsx'
import { Greeting } from './Greeting.jsx'
import Userage from './UserAge.jsx'
import { UserName } from './UserName.jsx'
import { Blog, Footer, Fruits, WebsiteLink } from './Task3.jsx'
import Tate, { MathResult, MultiplyNumbers, Quotes, WordCount } from './Task4.jsx'
import Movie, { Button, Modal, UserProfile } from './Task5.jsx'
import { AgeCheck } from './Task6.jsx'
import { ShoppingCart, TodoList, UserList } from './Task7.jsx'
import App from './Task8.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Gallery />
    <Profile />  */}
    {/* <Userage />
    <UserName /> */}
    {/* <Fruits /> */}
    {/* <WebsiteLink /> */}
    {/* <Blog /> */}
    {/* <Footer /> */}
    {/* <Tate />
    <Quotes />
    <MathResult />
    <WordCount />
    <MultiplyNumbers /> */}
    {/* <Movie title="Leo" year='2023' rating='9' /> */}
    {/* <Button label="Task" /> */}
    {/* <UserProfile /> */}
    {/* <Modal title="TechM" content="Industry" /> */}
    {/* <UserStatus isOnline="Online" /> */}
    {/* <AgeCheck age="19" /> */}
    {/* <RandomQuote /> */}
    {/* <UserList />
    <ShoppingCart />
    <TodoList /> */}
    {/* <ProfilePic />
    <Counter /> */}
    <App />
  </StrictMode>,
)
