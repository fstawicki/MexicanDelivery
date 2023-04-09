import {FC} from "react";
import '../styles/Card.scss';



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
        </div>
    );
}

export default Card;
