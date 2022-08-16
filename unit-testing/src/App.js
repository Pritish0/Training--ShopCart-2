import './App.css';
import React from 'react';
// import { AppContext } from "./libs/Contextlibs";
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ShopCartContext from './libs/ShopCartContext';

function App() {

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
  //   // filterBy: '',
  //   // filterData: ''
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
  
  return (
      <ShopCartContext>
        <ProtectedRoute />
      </ShopCartContext>
  );
}

export default App;
