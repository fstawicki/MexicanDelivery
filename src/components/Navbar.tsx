import { FC } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../store/CartContext';

import '../styles/Navbar.scss'

const Navbar: FC = () =>{

    const {openCart, cartQuantity} = useShoppingCart();

    return(
        <nav className="navbar">
            <div className="navbar_logo">
                <Link to={"/"}>
                    <h1>MexDev</h1>
                </Link>
            </div>
            <div className="navbar_right">
                    <button className='cartBtn' onClick={openCart}>
                        <FaShoppingCart className='icon' />{cartQuantity > 0 && ( <span className='cart_quantity'>{cartQuantity}</span>)}
                    </button>
            </div>
        </nav>
    );
}

export default Navbar;