import React,{useEffect} from "react";
import { useAppContext } from "../../libs/Contextlibs";
import Appbar from '../Appbar/Appbar';
import products from '../../Resources/products.json';
import Card from '../Card/Card';
import './Products.css';
import Sidebar from '../Sidebar/Sidebar';
import Product from '../Product/Product';

function Child(){

    const {
        loggedIn,
        data, 
        setData,
        cardsData, 
        setCardsData,
        selectedProduct, 
        setselectedProduct,
        sort, 
        setSort,
        filterData, 
        setFilterData
    } = useAppContext();

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
        if(data===null) {
            setData(products);
        }
        if(cardsData===null){
            setCardsData(products);
        }

        let newFilterData = {...filterData};

        if(filterData['brands'].length===0){
            let allbrands = [];
            products['products'].map((product) =>{
                if(!(allbrands.includes(product.brand))){
                    allbrands.push(product.brand);
                }
            });
            newFilterData = {...newFilterData,brands:allbrands.sort()};
        }

        if(filterData['categories'].length===0){
            let allcategories = [];
            products['products'].map((product) =>{
                if(!(allcategories.includes(product.category))){
                    allcategories.push(product.category);
                }
            });
            newFilterData = {...newFilterData,categories:allcategories.sort()};
        }

        if(filterData['stocks'].length===0){
            let allstocks = [];
            products['products'].map((product) =>{
                console.log(typeof product.stock)
                if(!(allstocks.includes(product.stock))){
                    allstocks.push(product.stock);
                }
            });
            newFilterData = {...newFilterData,stocks:allstocks.sort(function(a, b){return a-b})};
        }

        setFilterData(newFilterData);
        


    },[]);


    console.log(data);
    console.log(cardsData);

    if(cardsData===null){
        return(
            <div>Loading...</div>
        );
    }
    if(selectedProduct!==null){
        return(
            <Product/>
        );
    }
    return(
        <div>
            <Appbar/>
            <div className="productpage">
                <div className="sidebar">
                    <Sidebar/>
                </div>
                <div  className="products-container">
                    {cardsData['products'].sort(compare).map((product,index) =>{
                        return(
                            <Card
                                key={index}
                                title={product.title}
                                category={product.category}
                                price={product.price}
                                rating={product.rating}
                                image={product.thumbnail}
                                productdata={product}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
        
    );
}

export default Child;