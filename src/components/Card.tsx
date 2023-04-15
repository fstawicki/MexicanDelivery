import {FC, useRef, useState, useContext} from "react";
import '../styles/Card.scss';
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

interface Props{
    productID?: string;
    productName: string;
    imageURL?: string;
    productAlt?: string;
}

const Card:FC<Props>  = (Props: Props) => {
    
    const getPrice = () => {
        return Number(Props.productID)*10;
    }
    
    const amount:number = 0;

    return(
        
            <div className="card">
                <Link to={`/product/${Props.productID}`}>
                <img src={Props.imageURL} alt={Props.productAlt} className="productImg" />
                <p className="productName">{Props.productName}</p>
                </Link>
                <p className="productPrice">{getPrice()} zł</p>
                {amount === 0 ? (
                    <div className="addItemDiv">
                        <button className="addToCartBtn" onClick={() => {console.log('aaaa')}}>
                            Add to Cart<span><FaCartPlus/></span>
                        </button>
                    </div>
                ) : (
                <div className="addItemDiv">
                    <div className="smallButtons">
                        <button className="smallBtn">-</button>
                        <p className="text">in cart</p>
                        <button className="smallBtn">+</button>
                    </div>
                    <div className="removeBtnDiv">
                        <button className="removeBtn">Remove Item</button>
                    </div>
                </div>
                )}
            </div>
    );
}

export default Card;
