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
        <Link to={`/product/${props.productID}`}>
            <div className="card">
                <img src={props.imageURL} alt={props.productAlt} className="productImg" />
                <p className="productName">{props.productName}</p>
                <p className="productPrice">{getPrice()} zł</p>
                <button className="addToCartBtn">
                    Add to Cart<span><FaCartPlus/></span>
                </button>
            </div>
        </Link>
    );
}

export default Card;
