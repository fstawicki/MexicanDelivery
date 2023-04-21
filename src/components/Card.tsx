import {FC, useRef, useState, useContext} from "react";
import '../styles/Card.scss';
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useShoppingCart } from "../store/CartContext";

interface Props{
    productID: number;
    productName: string;
    imageURL: string;
    productAlt?: string;
}

const Card:FC<Props>  = (Props: Props) => {
    
    const getPrice = () => {
        return Props.productID*10;
    }
    
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()

    const quantity = getItemQuantity(Props.productID);

    return(
        
            <div className="card">
                <Link to={`/product/${Props.productID}`}>
                <img src={Props.imageURL} alt={Props.productAlt} className="productImg" />
                <p className="productName">{Props.productName}</p>
                </Link>
                <p className="productPrice">{getPrice()} zł</p>
                {quantity === 0 ? (
                    <div className="addItemDiv">
                        <button className="addToCartBtn" onClick={() => increaseCartQuantity(Props.productID)}>
                            Add to Cart<span><FaCartPlus/></span>
                        </button>
                    </div>
                ) : (
                <div className="addItemDiv">
                    <div className="smallButtons">
                        <button className="smallBtn" onClick={() => decreaseCartQuantity(Props.productID)}>-</button>
                        <p className="text"><span className="amount">{quantity}</span> in cart</p>
                        <button className="smallBtn" onClick={() => increaseCartQuantity(Props.productID)}>+</button>
                    </div>
                    <div className="removeBtnDiv">
                        <button className="removeBtn" onClick={() => removeFromCart(Props.productID)}>Remove Item</button>
                    </div>
                </div>
                )}
            </div>
    );
}

export default Card;
