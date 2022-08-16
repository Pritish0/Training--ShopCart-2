import React from 'react';
import { useAppContext } from "../../../libs/Contextlibs";

export default function Title(){

    const { 
        filter,
        setFilter,
    } = useAppContext();

    const handleChange = (e) => {
        setFilter({...filter, title: e.target.value});
    }

    return(
        <div>
            <input type="text" placeholder="Enter Title" className="inputfield" name="title" value={filter['title']} onChange={handleChange} />
        </div>
    );
}