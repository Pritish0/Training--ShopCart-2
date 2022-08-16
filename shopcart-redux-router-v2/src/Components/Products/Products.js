import React,{useEffect, useState} from "react";
// import { useAppContext } from "../../libs/Contextlibs";
import Appbar from '../Appbar/Appbar';
// import products from '../../Resources/products.json';
import Card from '../Card/Card';
import './Products.css';
import Sidebar from '../Sidebar/Sidebar';
// import Product from '../Product/Product';
import { useSelector, useDispatch } from 'react-redux';
import { setData, setCardsData, setFilterData } from '../../Store/shopcartSlice';
import { useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';


function Child(){

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const loggedIn = useSelector((state) => state.shopcart.loggedIn);
    const data = useSelector((state) => state.shopcart.data);
    const cardsData = useSelector((state) => state.shopcart.cardsData);
    // const selectedProduct = useSelector((state) => state.shopcart.selectedProduct);
    const sort = useSelector((state) => state.shopcart.sort);
    const filterData = useSelector((state) => state.shopcart.filterData);

    const [page, setPage] = useState(1);
    const handlePageChange = (event, value) => {
      setPage(value);
    };

    // const {
    //     data, 
    //     setData,
    //     cardsData, 
    //     setCardsData,
    //     selectedProduct, 
    //     sort, 
    //     filterData, 
    //     setFilterData
    // } = useAppContext();

    // console.log(products['products']);

    // var allbrands = [];

    // products['products'].map((product) =>{
    //     if(!(allbrands.includes(product.brand))){
    //         allbrands.push(product.brand);
    //     }
    // })

    // console.log(allbrands);

    const compare = (a, b) => {
        // console.log(a);
        if(sort['sortBy']===""){
            return 0;
        }
        else{
            return a[sort['sortBy']]-b[sort['sortBy']];
        }
        // if(ascsortOrder) {
        //     return a[sort['sortBy']].localeCompare(b[sort['sortBy']]);
        // }
        // else{
        //     return a[sort['sortBy']].localeCompare(b[sort['sortBy']])*-1;
        // }
    }

    useEffect(() => {
        if(!loggedIn){
            navigate('/');
        }
        else{
            if(data===null||cardsData===null) {
                console.log("data null")
                // dispatch(setData(products));
                axios.get("https://dummyjson.com/products?limit=100")
                .then(response => {
                    dispatch(setData(response.data));
                    dispatch(setCardsData(response.data));
                    // setData(response.data);
                })
            }
            else{
                console.log("filter data set")
                let newFilterData = {...filterData};
    
                if(filterData['brands'].length===0){
                    let allbrands = [];
                    data['products'].map((product) =>{
                        if(!(allbrands.includes(product.brand))){
                            allbrands.push(product.brand);
                        }
                    });
                    newFilterData = {...newFilterData,brands:allbrands.sort()};
                }
        
                if(filterData['categories'].length===0){
                    let allcategories = [];
                    data['products'].map((product) =>{
                        if(!(allcategories.includes(product.category))){
                            allcategories.push(product.category);
                        }
                    });
                    newFilterData = {...newFilterData,categories:allcategories.sort()};
                }
        
                if(filterData['stocks'].length===0){
                    let allstocks = [];
                    data['products'].map((product) =>{
                        console.log(typeof product.stock)
                        if(!(allstocks.includes(product.stock))){
                            allstocks.push(product.stock);
                        }
                    });
                    newFilterData = {...newFilterData,stocks:allstocks.sort(function(a, b){return a-b})};
                }
        
                dispatch(setFilterData(newFilterData));
            }
            // if(cardsData===null){
            //     dispatch(setCardsData(products));
            // }
        }

    },[data]);

    // if(!loggedIn){
    //     navigate('/');
    // }


    if(cardsData===null){
        return(
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        );
    }
    // if(selectedProduct!==null){
    //     return(
    //         <Product/>
    //     );
    // }

    return(
        <div>
            <Appbar/>
            <div className="productpage">
                <div className="sidebar">
                    <Sidebar/>
                </div>
                {/* <div  className="products-container">
                    {cardsData['products'].slice().sort(compare).slice((page-1)*10,10*page).map((product,index) =>{
                        return(
                            <Card
                                key={index}
                                title={product.title}
                                category={product.category}
                                price={product.price}
                                rating={product.rating}
                                image={product.thumbnail}
                                // productdata={product}
                                id = {product.id}
                            />
                        );
                    })}
                </div> */}
                <div className="products-container-withpagination">
                    <br/>
                    <div >
                        <Pagination count={Math.ceil(cardsData['products'].length/10)} page={page} onChange={handlePageChange} />
                    </div>
                    <div  className="products-container">
                        {cardsData['products'].slice().sort(compare).slice((page-1)*10,10*page).map((product,index) =>{
                            return(
                                <Card
                                    key={index}
                                    title={product.title}
                                    category={product.category}
                                    price={product.price}
                                    rating={product.rating}
                                    image={product.thumbnail}
                                    // productdata={product}
                                    id = {product.id}
                                />
                            );
                        })}
                    </div>
                </div>


            </div>
        </div>
        
    );
}

export default Child;