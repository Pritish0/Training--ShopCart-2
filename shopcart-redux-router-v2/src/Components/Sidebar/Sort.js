import React from 'react';
// import { useAppContext } from "../../libs/Contextlibs";
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../Store/shopcartSlice';

export default function Sort(){

    // const {
    //     sort, 
    //     setSort
    // } = useAppContext();

    const dispatch = useDispatch();

    const sort = useSelector((state) => state.shopcart.sort);


    const handleChange = (e) => {
        if(e.target.value===""){
            dispatch(setSort({
                sortBy: "",
                sortOrder: ""
            }));
        }
        else{
            dispatch(setSort({
                sortBy: e.target.value,
                sortOrder: 'asc'
            }));
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