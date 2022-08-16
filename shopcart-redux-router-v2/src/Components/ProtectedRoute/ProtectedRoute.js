// import { useAppContext } from "../../libs/Contextlibs";
import React, {useEffect} from 'react';
import Login from '../Login/Login';
// import Products from '../Products/Products';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Child(){
    // const {
    //     loggedIn
    // } = useAppContext();

    const navigate = useNavigate();

    const loggedIn = useSelector((state) => state.shopcart.loggedIn);

    useEffect(() => {
        if(loggedIn){
            navigate('/products');
        }
    },[loggedIn]);



    return <Login />
    // return loggedIn ? <Products/> : <Login/>;
}

export default Child;