import { createContext } from "react";


export type Cart = {
    
}

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item: string) => {},
    removeItem: (id: string) => {}
});

export default CartContext;











// import { createContext } from "react";

// const CartContext = createContext({
//     items: [],
//     totalAmount: 0,
//     addItem: (item: string) => {},
//     removeItem: (id: string) => {}
// });

// export default CartContext;