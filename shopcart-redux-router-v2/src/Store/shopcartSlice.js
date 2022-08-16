import { createSlice } from '@reduxjs/toolkit'

export const shopcartSlice = createSlice({
  name: 'shopcart',
  initialState: {
    loggedIn :false,
    data : null,
    cardsData : null,
    // selectedProduct : null,
    // selectedProductData : null,
    sort : {
      sortBy: '',
      sortOrder: ''
    },
    filter : {
      brands: [],
      categories: [],
      title: '',
      stocks: []
    },
    filterData : {
      brands: [],
      categories: [],
      stocks: []
    },
    cart: []

  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setCardsData: (state, action) => {
      state.cardsData = action.payload;
    },
    // setSelectedProduct: (state, action) => {
    //   state.selectedProduct = action.payload;
    // },
    // setSelectedProductData: (state, action) => {
    //   state.selectedProductData = action.payload;
    // },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setFilterData: (state, action) => {
      state.filterData = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLoggedIn, setData, setCardsData, setSort, setFilter, setFilterData, setCart } = shopcartSlice.actions

export default shopcartSlice.reducer