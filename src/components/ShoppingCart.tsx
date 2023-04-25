import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas, OffcanvasHeader, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../store/CartContext';
import CartItem from './CartItem';

import {BiArrowBack} from 'react-icons/bi';
import { FaShoppingCart } from "react-icons/fa";

import '../styles/ShoppingCart.scss';

type ShoppingCartProps = {
    isOpen: boolean
}

export default function ShoppingCart({isOpen}: ShoppingCartProps){

    const { closeCart, cartItems } = useShoppingCart();

    return(
        <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
            <OffcanvasHeader>
                <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
            </OffcanvasHeader>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </Stack>
                <div className="buttons">
                    <button className='cartBtn' onClick={closeCart}><BiArrowBack/> Back to Menu</button>
                    <button className='cartBtn toCheckout'>Go to Checkout <FaShoppingCart /></button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
