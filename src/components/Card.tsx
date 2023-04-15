import {FC} from "react";
import '../styles/Card.scss';
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

interface Props{
    productID?: string;
    productName: string;
    imageURL?: string;
    productAlt?: string;
}

const Card: FC<Props> = (props: Props) => {

    const getPrice = () => {
        return Number(props.productID)*10;
    }

    return(
        
            <div className="card">
                <Link to={`/product/${props.productID}`}>
                <img src={props.imageURL} alt={props.productAlt} className="productImg" />
                <p className="productName">{props.productName}</p>
                </Link>
                <div className="pricing">
                    <p className="productPrice">{getPrice()} zł</p>
                    <input className="quantityInput" type="number" name="quantity" id="quantity" />
                </div>
                <button className="addToCartBtn" onClick={() => {console.log('aaaa')}}>
                    Add to Cart<span><FaCartPlus/></span>
                </button>
            </div>
    );
}

export default Card;
