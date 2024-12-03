import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Products from './components/products'
import Home from './components/home'
import Error from './components/error'
import ProductList from './components/ProductServices.jsx'
import Product from './components/ProductServices.jsx'
import Desc from  './components/desc.jsx'
import Display from './components/display.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 function App() {
const router=createBrowserRouter([
  {
    path:"/",
    element:(  <div><Header/> <Home/></div>   ),
  },
  {
    path:"/ProductLists",
    element:(  <div><Header/> <ProductList/></div>   ),
  },
  {
    path:"/products",
    element: (<div><Header/> <Products/></div>),
  },
  {
    path:"/Desc/:id",
    element:(  <div><Header/> <Desc/></div>   ),
  },
  {
    path:"/Display",
    element:(  <div><Header/> <Display/></div>   ),
  },
  // {  path:"/home",
  //   element:<Home/>,

  // },
  {  path:"/*",
    element:<Error/>,

  },
  


]);
















  return (
    <>
        <RouterProvider router={router} />
      
      {/* <Header/> */}
      {/* <div className="text-center  align-bottom min-h-96"> */}
       {/* <Products/> */}
      {/* </div> */}
       
        <Footer/>
      
    </>
  )
}

export default App
