import React,{useState} from 'react';
import { AppContext } from "./Contextlibs";

export default function ShopCartContext({children}){
    const [loggedIn, setLoggedIn] = useState(false);
    const [data, setData] = useState(null);
    const [cardsData, setCardsData] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedProductData, setSelectedProductData] = useState(null);
    const [sort, setSort] = useState({
      sortBy: '',
      sortOrder: ''
    });
    const [filter, setFilter] = useState({
      // filterBy: '',
      // filterData: ''
      brands: [],
      categories: [],
      title: '',
      stocks: []
    });
    const [filterData, setFilterData] = useState({
      brands: [],
      categories: [],
      stocks: []
    })

    return (
        <AppContext.Provider
          value={{
            loggedIn,
            setLoggedIn, 
            data, 
            setData,
            cardsData, 
            setCardsData,
            selectedProduct, 
            setSelectedProduct,
            selectedProductData, 
            setSelectedProductData, 
            sort, 
            setSort, 
            filter, 
            setFilter,
            filterData, 
            setFilterData
          }}
        >
          {children}
        </AppContext.Provider>
    );
}