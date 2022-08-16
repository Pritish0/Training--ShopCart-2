import React,{useEffect} from 'react';
// import { useAppContext } from "../../../libs/Contextlibs";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../../Store/shopcartSlice';

export default function Brands(){


    // const { 
    //     filter, 
    //     setFilter,
    //     filterData 
    // } = useAppContext();

    const dispatch = useDispatch();

    const filter = useSelector((state) => state.shopcart.filter);
    const filterData = useSelector((state) => state.shopcart.filterData);

    const handleOnChange = (event) => {

        if (filter['brands'].includes(event.target.value)) {
            const filtered = filter['brands'].filter((item) => item !== event.target.value);
            dispatch(setFilter({...filter,brands:filtered}));
        } 
        else {
            dispatch(setFilter({...filter,brands: [...filter['brands'], event.target.value]}));
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