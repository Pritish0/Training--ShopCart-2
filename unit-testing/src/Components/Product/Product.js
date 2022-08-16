import React,{useEffect} from "react";
import { useAppContext } from "../../libs/Contextlibs";
import Button from '@mui/material/Button';
import Appbar from '../Appbar/Appbar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // css for carousel
import { Carousel } from 'react-responsive-carousel';
import './Product.css';

export default function Product(){

    const { 
        selectedProduct, 
        setSelectedProduct
    } = useAppContext();

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    console.log(selectedProduct);

    return(
        <div>
            <Appbar />
            <div className="productdetails-page">
                <div>
                    <Button variant="text" onClick={() => setSelectedProduct(null)}>{"< Back to Products Page"}</Button>
                </div>
                <br/>

                <div className="productimages-carousel-container">
                    <div className="productimages-carousel">
                        <Carousel 
                            autoPlay={true}
                            dynamicHeight={true}
                            // showStatus= {false}
                            infiniteLoop={true}
                            // showThumbs={false}
                        >
                            {selectedProduct.images.map((image, index) =>{
                                return(
                                    <img key={index} src={image} />
                                );
                            })}
                        </Carousel>
                    </div>

                    <div className="productdesc">
                        <div className="productdesc-title">{selectedProduct.title}</div>
                        <div className="productdesc-rating">{selectedProduct.rating}</div>
                        <div className="productdesc-description">{selectedProduct.description}</div>
                        <div className="product-box">
                            <div className="product-box-title">Category</div>
                            <div className="product-box-text">{selectedProduct.category}</div>
                        </div>
                        <div className="product-box">
                            <div className="product-box-title">Price</div>
                            <div className="product-box-text">Rs.{selectedProduct.price}</div>
                        </div>
                        <br/>
                        <div className="productdesc-discount">Product available at a discount of {selectedProduct.discountPercentage}%</div>
                        {/* <div className="productdesc-box">
                            <div className="productdesc-box">
                                <div>Category</div>
                                <div>{selectedProduct.category}</div>
                            </div>
                            <div className="productdesc-box">
                                <div>Price</div>
                                <div>{selectedProduct.price}</div>
                            </div>
                        </div>             */}
                    </div>




                    
                </div>

                <br/>

                <div className="productdetails">
                    <div className="productdetails-heading">Product Details</div>
                    <br/>
                    <div className="product-box">
                        <div className="product-box-title">Name</div>
                        <div className="product-box-text">{selectedProduct.title}</div>
                    </div>
                    <div className="product-box">
                        <div className="product-box-title">Category</div>
                        <div className="product-box-text">{selectedProduct.category}</div>
                    </div>
                    <div className="product-box">
                        <div className="product-box-title">Brand</div>
                        <div className="product-box-text">{selectedProduct.brand}</div>
                    </div>
                    <div className="product-box">
                        <div className="product-box-title">Stock Quantity</div>
                        <div className="product-box-text">{selectedProduct.stock}</div>
                    </div>
                </div>

                <br/>
            </div>


        </div>

    );
}