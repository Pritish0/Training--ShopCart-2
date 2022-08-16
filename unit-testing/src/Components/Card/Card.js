import * as React from 'react';
import Button from '@mui/material/Button';
import './Card.css';
import { useAppContext } from "../../libs/Contextlibs";

export default function MediaCard({image,title,price,category,rating,productdata}) {

    const { 
        selectedProduct, 
        setSelectedProduct
    } = useAppContext();

    return (
        <div className="card">

            <div>
                <img src={image} className="card-image"></img>
            </div>

            <div className="card-header">
                <div>
                    <div className="card-title" onClick={() => setSelectedProduct(productdata)}>
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
                <Button variant="text" onClick={() => setSelectedProduct(productdata)}>DETAILS</Button>
            </div>

        </div>
    );
}
