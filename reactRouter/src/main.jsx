import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home'  
import Root from './root'
import About from './components/About/About'
import User from './components/User/User.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Contact from './components/Contact/Contact'
import GitHub,  {  gitHubLoader  } from './components/GitHub/GitHub.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} >
    <Route path="" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="user/:userid" element={<User />} />
    <Route loader={ gitHubLoader } path="/gitHub" element={<GitHub />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
