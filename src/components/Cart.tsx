import {FC} from 'react';

import { useNavigate } from 'react-router-dom';

import { FaShoppingCart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { BiArrowBack } from 'react-icons/bi';

import '../styles/Cart.scss';

interface Props{}

const Cart: FC<Props> = () => {

    const navigate = useNavigate();

    return(

        <div className="Cart">
            <h2 className="title"><FaShoppingCart/><span>My Cart:</span></h2>
            <div className="item">
                <p>Product Name</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Remove Item</p>
            </div>
            <div className="item">
                <p>aaaaaaaaaaaaa aaaaaaaaa ssssss sss</p>
                <p>22 zł</p>
                <input type="number" name="" id="" />
                <p className='deleteItemBtn'><a href=""><MdDeleteForever/></a></p>
            </div>
            <button className="btn backToMenuBtn" onClick={() => {navigate('/');}}><BiArrowBack/><span>Back to Menu</span></button>
            <button className="btn toCheckout"><FaShoppingCart /> Go to Checkout</button>
        </div>
    );

}



export default Cart;