import {FC, useRef, useState, useContext} from "react";
import '../styles/Card.scss';
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import CartContext from "../store/CartContext";

// interface Props{
//     productID?: string;
//     productName: string;
//     imageURL?: string;
//     productAlt?: string;
// }

const Card = (props) => {

    const amountInputRef = useRef(null);
    const [amountIsValid, setAmountIsValid] = useState(true)

    const cartCtx = useContext(CartContext);
    
    const getPrice = () => {
        return Number(props.productID)*10;
    }
    
    const addItem = () => {
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        
            cartCtx.addItem({
                id: props.productID,
                name: props.productName,
                amount: enteredAmountNumber,
                price: getPrice()
            })
        

    }
    
    

    return(
        
            <div className="card">
                <Link to={`/product/${props.productID}`}>
                <img src={props.imageURL} alt={props.productAlt} className="productImg" />
                <p className="productName">{props.productName}</p>
                </Link>
                <div className="pricing">
                    <p className="productPrice">{getPrice()} zł</p>
                    <input min={0} ref={amountInputRef} className="quantityInput" type="number" name="quantity" id="quantity" />
                </div>
                {!amountIsValid && <p>Please enter a valid amount</p>}
                <button className="addToCartBtn" onClick={addItem}>
                    Add to Cart<span><FaCartPlus/></span>
                </button>
            </div>
    );
}

export default Card;
