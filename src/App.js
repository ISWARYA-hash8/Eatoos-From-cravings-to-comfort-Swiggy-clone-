import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import React, {lazy,Suspense} from "react";
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter , Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import GroceryList  from './components/GroceryList';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { useState,useEffect } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
//import Grocery from './components/Grocery';
/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

//  const styleCard = {
//   backgroundColor: '#f0f0f0',
// };

// * Props :

// * prop -> is Just a JS Object

// * Note: When you have to dainamically pass in a data to a component, you pass in prop

// const RestaurantCard = (props) => {
// console.log(props);

// * Note We can also destructure props on the fly by wrapping them in between {}, this is like...

// * const { resName, cuisine } = props;

// const RestaurantCard = ({ resName, cuisine }) => {
//   console.log({ resName, cuisine });

// * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)

// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.

// * Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

// * Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer

/* Episode 05 Let's get Hookd ------------------------------------------------------------------------------------------------------ 
 * There are 2 type of Export/Import
 *   1) Defalut Export/Import
 *        export default Component;
 *        import Component from 'path';

 *   2) Named Export/Import
 *        export const Component;
 *        import { Component } from 'path'; 
 
*/

const Grocery = lazy(() => import("./components/Grocery"));
const currYear = new Date().getFullYear();

const Footer = () => {
  
  return (
    <footer className='flex justify-center items-center h-20  bg-green-100 rounded-sm'>
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Ishu</strong>
      </p>
    </footer>
  );
};



const AppLayout = () => {

  const [userName,setUserName] = useState();
  useEffect(() =>{
    const data = {
      name : "Iswarya",
    };
    setUserName(data.name);
  
  },[]);
  console.log(<Body />);
  return (
    <Provider store={appStore}>
    <UserContext.Provider   value = {{
      loggedInUser : userName,
    }}>
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([{
  path : "/" ,
  element: <AppLayout/>, 
  children : [ 
    {
      path : "/",
      element : <Body />,
    },
    {
      path: "/about",
      element:<About />,
    },
    {
      path: "/contact",
      element:<Contact />,
    },
    {
      path:"/grocery",
      element:<Suspense fallback={<h1>Loading...</h1>}><GroceryList /></Suspense>
    },
    {
      path : "/restaurants/:resId",
      element: <RestaurantMenu />,

    },
    {
      path : "/Cart",
      element : <Cart/>,
    }

  ],
  errorElement:<Error />,
},

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
