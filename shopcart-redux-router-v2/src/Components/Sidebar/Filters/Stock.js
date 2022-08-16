import React,{useEffect} from 'react';
// import { useAppContext } from "../../../libs/Contextlibs";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../../Store/shopcartSlice';

export default function Stock(){

    // const { 
    //     data, 
    //     setData,
    //     cardsData, 
    //     setCardsData,
    //     filter, 
    //     setFilter,
    //     filterData, 
    //     setFilterData
    // } = useAppContext();

    const dispatch = useDispatch();

    const filter = useSelector((state) => state.shopcart.filter);
    const filterData = useSelector((state) => state.shopcart.filterData);

    const handleOnChange = (event) => {

        const valueToNumber = parseInt(event.target.value);

        if (filter['stocks'].includes(valueToNumber)) {
            const filtered = filter['stocks'].filter((item) => item !== valueToNumber);
            dispatch(setFilter({...filter,stocks:filtered}));
        } 
        else {
            dispatch(setFilter({...filter,stocks: [...filter['stocks'], valueToNumber]}));
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