import { useAppContext } from "../../libs/Contextlibs";
import Login from '../Login/Login';
import Products from '../Products/Products';

function Child(){
    const {
        loggedIn
    } = useAppContext();

    return loggedIn ? <Products/> : <Login/>;
}

export default Child;