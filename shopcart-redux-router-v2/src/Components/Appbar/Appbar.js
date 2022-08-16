// import { useAppContext } from "../../libs/Contextlibs";
import './Appbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function Appbar(){
    // const {
    //     loggedIn
    // } = useAppContext();

    const cart = useSelector((state) => state.shopcart.cart);

    return(
        <div className="Appbar">
            <div className="Appbar-title">ShopCart</div>
            <div style={{display: 'flex'}}>
                <Link to='/addproduct' style={{textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Button variant="contained" style={{backgroundColor: 'white', color: 'black'}}>
                        Add Product
                    </Button>
                </Link>
                &nbsp;
                <Link to='/cart' style={{textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Button variant="contained" style={{backgroundColor: 'white', color: 'black'}}>
                        <ShoppingCartIcon/> &nbsp;&nbsp;&nbsp;
                        {cart.length}
                    </Button>
                </Link>
            </div>

        </div>
        
    );
}

export default Appbar;