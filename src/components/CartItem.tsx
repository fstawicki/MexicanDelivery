import { useShoppingCart } from "../store/CartContext";

type CartItemProps = {
    id: number,
    quantity: number
}

//zamien na kontekst i pobieraj itemy z niego
const storeItems: any[] = []

export default function CartItem({id, quantity}: CartItemProps){
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find((i: { id: number; }) => i.id === id)
    if(item === null) return null


    return(
        <></>
    )

}

