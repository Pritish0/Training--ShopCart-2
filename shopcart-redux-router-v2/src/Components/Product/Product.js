import React,{useEffect, useState} from "react";
// import { useAppContext } from "../../libs/Contextlibs";
import Button from '@mui/material/Button';
import Appbar from '../Appbar/Appbar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // css for carousel
import { Carousel } from 'react-responsive-carousel';
import './Product.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCart } from '../../Store/shopcartSlice';
import { useNavigate, useParams } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Product(){

    // const { 
    //     selectedProduct, 
    //     setSelectedProduct
    // } = useAppContext();

    const navigate = useNavigate();

    const { id } = useParams();

    const dispatch = useDispatch();

    const loggedIn = useSelector((state) => state.shopcart.loggedIn);
    const cardsData = useSelector((state) => state.shopcart.cardsData);
    const cart = useSelector((state) => state.shopcart.cart);
    // const selectedProduct = useSelector((state) => state.shopcart.selectedProduct);

    const [selectedProduct, setSelectedProductData] = useState(null);
    

    const isProduct = (product) => {
        return product.id===parseInt(id);
    }

    useEffect(() => {
        if(!loggedIn){
            navigate('/');
        }
        else{
            window.scrollTo(0, 0);
            let products = [...cardsData['products']];
            let product = products.find(isProduct);
            setSelectedProductData(product);
        }
    },[])


    // if(!loggedIn){
    //     navigate('/');
    // }

    const addToCart = () => {
        let newCart = [...cart];
        // let arr = newCart.filter(cart => newCart.includes(cart.id));
        if (newCart.filter(product => product.id===parseInt(id)).length > 0) {
            const filtered = newCart.filter((product) => product.id !== parseInt(id));
            dispatch(setCart(filtered));
        } 
        else {
            dispatch(setCart([...cart,selectedProduct]));
        }
    }

    if(selectedProduct===null){
        return (
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        );
    }

    return(
        <div>
            <Appbar />
            <div className="productdetails-page">
                <div>
                    <Button variant="text" onClick={() => navigate('/products')}>{"< Back to Products Page"}</Button>
                </div>
                <br/>
                <div>
                    &nbsp;&nbsp;
                    <Button variant="text" onClick={addToCart}>Add to Cart</Button>
                </div>

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