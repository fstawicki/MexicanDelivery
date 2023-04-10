import {FC} from "react";
import '../styles/Card.scss';
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";



interface Props{
    productID?: string;
    productName: string;
    productPrice: number;
    imageURL?: string;
    productAlt?: string;
}

const Card: FC<Props> = (props: Props) => {

    return(
        <div className="card">
            <img src={props.imageURL} alt={props.productAlt} className="productImg" />
            <p className="productName">{props.productName}</p>
            <p className="productPrice">{props.productPrice} zł</p>
            <button className="addToCartBtn">
                Add to Cart<span><FaCartPlus/></span>
            </button>
        </div>
    );
}

export default Card;
