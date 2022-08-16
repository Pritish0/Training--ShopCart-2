import React,{useEffect} from 'react';
import { useAppContext } from "../../libs/Contextlibs";
import Accordion from '../Accordion/Accordion';
import Brands from './Filters/Brands';
import Categories from './Filters/Categories';
import Stocks from './Filters/Stock';
import Title from './Filters/Title';

export default function Filter(){

    const { 
        data, 
        setData,
        cardsData, 
        setCardsData,
        filter, 
        setFilter
    } = useAppContext();

    useEffect(() => {
        let newCardsData = {...data};
        if(filter['brands'].length !== 0){
            let arr = newCardsData['products'].filter(product => filter['brands'].includes(product.brand));
            console.log(arr);
            
            newCardsData['products'] = arr;
        }
        if(filter['categories'].length !== 0){
            let arr = newCardsData['products'].filter(product => filter['categories'].includes(product.category));
            console.log(arr);
            
            newCardsData['products'] = arr;
        }
        if(filter['title']!==""){
            let arr = newCardsData['products'].filter((product) => {
                return(
                  product['title'].toLowerCase().indexOf(filter['title'].toLowerCase()) > -1
                ); },
            )
            
            newCardsData['products'] = arr;
        }
        if(filter['stocks'].length !== 0){
            let arr = newCardsData['products'].filter(product => filter['stocks'].includes(product.stock));
            console.log(arr);
            
            newCardsData['products'] = arr;
        }
        setCardsData(newCardsData);
    },[filter]);

    return(
        <div>
            <Accordion title="Brands" content={<Brands/>} />
            <Accordion title="Categories" content={<Categories/>} />
            <Accordion title="Title" content={<Title/>} />
            <Accordion title="Stock" content={<Stocks/>} />
        </div>
    );

}