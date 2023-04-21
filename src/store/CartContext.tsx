import { ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number,
    quantity: number
}

interface Product {
    id: number;
    title: string;
    image: string;
}

type ShoppingCartContext = {
    openCart: () => void,
    closeCart: () => void, 
    getApiData: (data: any) => void, 
    getItemQuantity: (id: number) => number,
    increaseCartQuantity: (id: number) => void,
    decreaseCartQuantity: (id: number) => void,
    removeFromCart: (id: number) => void,
    cartQuantity: number,
    cartItems: CartItem[],
    allProducts: Product[]
}



const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
    
    
    const [allProducts, setAllProducts] = useState<Product[]>([]);

    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const cartQuantity = cartItems.reduce((quantity,item) => item.quantity + quantity, 0);

    const openCart = () => {
        setIsOpen(true);
    }

    const closeCart = () => {
        setIsOpen(false);
    }

    const getApiData = (data: SetStateAction<Product[]>) => {
        setAllProducts(data)
    }

    function getItemQuantity(id: number){
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id: number){
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null){
                return [...currItems, {id, quantity: 1}]
            }else{
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number){
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity == 1){
                return currItems.filter(item => item.id !== id);
            }else{
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number){
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return(
        <ShoppingCartContext.Provider 
            value={{
                getItemQuantity, 
                increaseCartQuantity, 
                decreaseCartQuantity, 
                removeFromCart, 
                openCart, 
                closeCart, 
                cartItems, 
                cartQuantity,
                getApiData,
                allProducts
            }}>
                {children}
                <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}













// import { createContext } from "react";

// const CartContext = createContext({
//     items: [],
//     totalAmount: 0,
//     addItem: (item: string) => {},
//     removeItem: (id: string) => {}
// });

// export default CartContext;