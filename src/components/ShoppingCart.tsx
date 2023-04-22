import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas, OffcanvasHeader, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../store/CartContext';
import CartItem from './CartItem';

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
            </Offcanvas.Body>
        </Offcanvas>
    )
}
