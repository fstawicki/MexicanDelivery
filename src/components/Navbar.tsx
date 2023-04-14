import {FC} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

import '../styles/Navbar.scss'

interface Props{

}

const Navbar: FC<Props> = () =>{

    return(
        <nav className="navbar">
            <div className="navbar_logo">
                <Link to={"/"}>
                    <h1>MexDev</h1>
                </Link>
            </div>
            <div className="navbar_right">
                <p>
                    <Link to={"/cart"}>
                        <FaShoppingCart className='icon' /><span className='cart_quantity'>1</span>
                    </Link>
                </p>
            </div>
        </nav>
    );
}

export default Navbar;