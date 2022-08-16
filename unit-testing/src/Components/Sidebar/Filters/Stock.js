import React,{useEffect} from 'react';
import { useAppContext } from "../../../libs/Contextlibs";

export default function Stock(){

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

        const valueToNumber = parseInt(event.target.value);

        if (filter['stocks'].includes(valueToNumber)) {
            const filtered = filter['stocks'].filter((item) => item !== valueToNumber);
            setFilter({...filter,stocks:filtered});
        } 
        else {
            setFilter({...filter,stocks: [...filter['stocks'], valueToNumber]});
        }

    };

    return(
        <div>
            {filterData['stocks'].map((stock,index) =>{
                return(
                    <div 
                        key={index} 
                        // className="checkboxcontainer"
                    >
                        <input
                            type="checkbox"
                            value={stock}
                            checked={filter['stocks'].includes(stock)} //if already selected, ticked
                            onChange={handleOnChange}
                        />
                        <label>{stock}</label>
                    </div>
                );
            })}
        </div>
    );
}