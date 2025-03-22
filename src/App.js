/**
 * Header
 * - Logo
 * - NavItems
 * Body
 * - Search
 * - Restuarent Container
 * - - Cards
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

const App = ()=>{
    return (
        <div className = 'app'>
            <Header/>
            <Body/>
        </div>
    )
}
const appRoute = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },{
        path:'/about',
        element: <About/>
    },{
        path:'/contact',
        element:<Contact/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoute}/>);