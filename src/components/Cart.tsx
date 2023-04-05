import {FC} from 'react';
import { FaShoppingCart } from "react-icons/fa";

interface Props{

}

const Cart: FC<Props> = () => {
    return(
        <div className="Cart">
            <h1 className="title"><FaShoppingCart /> My Cart:</h1>
            <div className="item">
                <img src="" alt="" />
                
            </div>

            <button className="toCheckout">Go to Checkout</button>
        </div>
    );

}


export default Cart;