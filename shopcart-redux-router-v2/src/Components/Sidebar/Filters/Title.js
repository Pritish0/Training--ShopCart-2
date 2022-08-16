import React from 'react';
// import { useAppContext } from "../../../libs/Contextlibs";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../../Store/shopcartSlice';

export default function Title(){

    // const { 
    //     filter,
    //     setFilter,
    // } = useAppContext();

    const dispatch = useDispatch();

    const filter = useSelector((state) => state.shopcart.filter);

    const handleChange = (e) => {
        dispatch(setFilter({...filter, title: e.target.value}));
    }

    return(
        <div>
            <input type="text" placeholder="Enter Title" className="inputfield" name="title" value={filter['title']} onChange={handleChange} />
        </div>
    );
}