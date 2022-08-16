import './App.css';
// import React,{useState} from 'react';
// import { AppContext } from "./libs/Contextlibs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navigate} from "react-router-dom";
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Products from './Components/Products/Products';
import Product from './Components/Product/Product';
// import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import AddProduct from './Components/AddProduct/AddProduct';


function App() {

  return(
    <Router>
      <Routes>
        <Route path="/login" element={<ProtectedRoute />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>  
    </Router>
  );

  // return <ProtectedRoute />;

  // const [loggedIn, setLoggedIn] = useState(false);
  // const [data, setData] = useState(null);
  // const [cardsData, setCardsData] = useState(null);
  // const [selectedProduct, setSelectedProduct] = useState(null);
  // const [selectedProductData, setSelectedProductData] = useState(null);
  // const [sort, setSort] = useState({
  //   sortBy: '',
  //   sortOrder: ''
  // });
  // const [filter, setFilter] = useState({
  //   brands: [],
  //   categories: [],
  //   title: '',
  //   stocks: []
  // });
  // const [filterData, setFilterData] = useState({
  //   brands: [],
  //   categories: [],
  //   stocks: []
  // })
  
  // return (
  //     <AppContext.Provider
  //       value={{
  //         loggedIn,
  //         setLoggedIn, 
  //         data, 
  //         setData,
  //         cardsData, 
  //         setCardsData,
  //         selectedProduct, 
  //         setSelectedProduct,
  //         selectedProductData, 
  //         setSelectedProductData, 
  //         sort, 
  //         setSort, 
  //         filter, 
  //         setFilter,
  //         filterData, 
  //         setFilterData
  //       }}
  //     >
  //       <ProtectedRoute />
  //     </AppContext.Provider>
  // );
}

export default App;
