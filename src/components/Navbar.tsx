import {FC} from 'react';
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

import '../styles/Navbar.scss'

interface Props{

}

const Navbar: FC<Props> = () =>{

    return(
        <nav className="navbar">
            <div className="navbar_left">
                <ul className="menu">
                    
                </ul>
            </div>
            <div className="navbar_logo">
                <Link to={"/"}>
                    <h1>MexDev</h1>
                </Link>
            </div>
            <div className="navbar_right">
                    {/* <li className='iconsItem'><FaUser /></li> */}
                    <Link to={"/"}>
                        <p>
                            <FaShoppingCart className='icon' />
                            <span className='cart_quantity'>1</span>
                        </p>
                    </Link>

            </div>
        </nav>
    );
}

export default Navbar;