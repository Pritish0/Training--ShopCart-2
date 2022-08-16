import * as React from 'react';
import Button from '@mui/material/Button';
import './Card.css';
// import { useAppContext } from "../../libs/Contextlibs";
// import { useDispatch } from 'react-redux';
// import { setSelectedProduct } from '../../Store/shopcartSlice';
import { useNavigate } from 'react-router-dom';

export default function MediaCard({image,title,price,category,rating,id}) {

    // const { 
    //     selectedProduct, 
    //     setSelectedProduct
    // } = useAppContext();

    const navigate = useNavigate();

    // const dispatch = useDispatch();

    return (
        <div className="card">

            <div>
                <img src={image} className="card-image"></img>
            </div>

            <div className="card-header">
                <div>
                    <div 
                        className="card-title" 
                        // onClick={() => dispatch(setSelectedProduct(productdata))}
                        onClick={() => navigate('/product/'+id)}
                    >
                        {title}
                    </div>
                    <div className="cardcategory">
                        {category}
                    </div>
                </div>
                <div className="cardrating">
                    <div className="cardrating-heading">Rating</div>
                    <div className="cardrating-number">{rating}</div>
                </div>

            </div>

            <br/>
            <br/>
            
            <div className="card-footer">
                <div className="cardprice">
                    Rs.{price}
                </div>
                <Button variant="text" onClick={() => navigate('/product/'+id)}>DETAILS</Button>
            </div>

        </div>
    );
}
