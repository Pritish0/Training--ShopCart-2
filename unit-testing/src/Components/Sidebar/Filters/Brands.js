import React,{useEffect} from 'react';
import { useAppContext } from "../../../libs/Contextlibs";

export default function Brands(){

    const { 
        data, 
        setData,
        cardsData, 
        setCardsData,
        filter, 
        setFilter,
        filterData, 
        setFilterData
    } = useAppContext();

    const handleOnChange = (event) => {

        if (filter['brands'].includes(event.target.value)) {
            const filtered = filter['brands'].filter((item) => item !== event.target.value);
            setFilter({...filter,brands:filtered});
        } 
        else {
            setFilter({...filter,brands: [...filter['brands'], event.target.value]});
        }

    };

    return(
        <div>
            {filterData['brands'].map((brand,index) =>{
                return(
                    <div 
                        key={index} 
                        // className="checkboxcontainer"
                    >
                        <input
                            type="checkbox"
                            value={brand}
                            checked={filter['brands'].includes(brand)} //if already selected, ticked
                            onChange={handleOnChange}
                        />
                        <label>{brand}</label>
                    </div>
                );
            })}
        </div>
    );
}