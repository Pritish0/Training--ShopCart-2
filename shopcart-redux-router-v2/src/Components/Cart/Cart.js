import React,{useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setCart } from '../../Store/shopcartSlice';
import Button from '@mui/material/Button';
import './Cart.css';
import Checkout from './Checkout';
import Appbar from '../Appbar/Appbar';

export default function Cart(){

    const [checkout, setCheckout] = useState(false);

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.shopcart.cart);

    const deleteItem = (item) => {
        let newCart = [...cart];
        const filtered = newCart.filter((product) => product.id !== parseInt(item.id));
        dispatch(setCart(filtered));
    }

    return(
        <div className="cart-container">
            <Appbar/>
            <br/>
            <br/>
            <div className="cart-title">Cart</div>
            <br/>
            <br/>
            <table>
                {/* <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead> */}

                <tbody>
                    {cart.map((product,index) => {
                        return(
                            <tr key={index}>
                                <td>{product.title}</td>
                                <td>Rs. {product.price}</td>
                                <td>
                                    <Button variant="contained" onClick={() => deleteItem(product)} style={{ backgroundColor: 'red'}}>
                                        Delete Item
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                    <tr>
                        <td style={{fontWeight: 'bold'}}>Total Price</td>
                        <td style={{fontWeight: 'bold'}}>Rs. {cart.map(item => item.price).reduce((prev, curr) => prev + curr, 0)}</td>
                        <td></td>
                    </tr>
                </tbody>
            

            </table>
            <br/>
            <br/>
            {checkout ? (
                <div>
                    <Checkout/>
                </div>
            ): (
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button variant="contained" onClick={() => setCheckout(true)}>Checkout</Button>
                </div>
                
            )}
            <br/>
            <br/>

        </div>
    );
}