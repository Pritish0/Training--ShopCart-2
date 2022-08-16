import React,{useEffect} from 'react';
import { useAppContext } from "../../../libs/Contextlibs";

export default function Categories(){

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

        if (filter['categories'].includes(event.target.value)) {
            const filtered = filter['categories'].filter((item) => item !== event.target.value);
            setFilter({...filter,categories:filtered});
        } 
        else {
            setFilter({...filter,categories: [...filter['categories'], event.target.value]});
        }

    };

    return(
        <div>
            {filterData['categories'].map((category,index) =>{
                return(
                    <div 
                        key={index} 
                        // className="checkboxcontainer"
                    >
                        <input
                            type="checkbox"
                            value={category}
                            checked={filter['categories'].includes(category)} //if already selected, ticked
                            onChange={handleOnChange}
                        />
                        <label>{category}</label>
                    </div>
                );
            })}
        </div>
    );
}