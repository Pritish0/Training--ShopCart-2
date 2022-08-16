import React,{useEffect} from 'react';
// import { useAppContext } from "../../../libs/Contextlibs";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../../Store/shopcartSlice';

export default function Categories(){

    // const { 
    //     filter, 
    //     setFilter,
    //     filterData
    // } = useAppContext();

    const dispatch = useDispatch();

    const filter = useSelector((state) => state.shopcart.filter);
    const filterData = useSelector((state) => state.shopcart.filterData);

    const handleOnChange = (event) => {

        if (filter['categories'].includes(event.target.value)) {
            const filtered = filter['categories'].filter((item) => item !== event.target.value);
            dispatch(setFilter({...filter,categories:filtered}));
        } 
        else {
            dispatch(setFilter({...filter,categories: [...filter['categories'], event.target.value]}));
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