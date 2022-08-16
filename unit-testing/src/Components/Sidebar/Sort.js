import React from 'react';
import { useAppContext } from "../../libs/Contextlibs";

export default function Sort(){

    const {
        data,
        sort, 
        setSort,
        cardsData, 
        setCardsData,
    } = useAppContext();

    const handleChange = (e) => {
        if(e.target.value===""){
            setSort({
                sortBy: "",
                sortOrder: ""
            });
        }
        else{
            setSort({
                sortBy: e.target.value,
                sortOrder: 'asc'
            });
        }
    }

    return(
        <div>
            <select
              className="inputfield" name="sort" value={sort['sortBy']} onChange={handleChange} >
              <option value="" disabled>Select an option</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
              <option value="discountPercentage">Discount</option>
            </select>
        </div>
    );

}