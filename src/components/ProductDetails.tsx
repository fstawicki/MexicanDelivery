import {FC} from 'react';
import { FaCartPlus } from "react-icons/fa";

import '../styles/ProductDetails.scss';

interface Props{
    productID?: number;
}

const ProductDetails: FC<Props> = (props: Props) => {





    return(
        <div className="productDetails">
            <div className="productImage">
                <img src="" alt="a" className="image" />
            </div>
            <div className="productDescription">
                <h1 className='productName'>name</h1>
                <p className='ingredients'>Ingredients: </p>
                <ul className="ingredientList">
                    <li className="ingredient">a</li>
                </ul>
                <p className="productPrice">50 zł</p>
                <div className="quantityContainer">
                    <p className="quantityText">Quantity: </p>
                    <input type="number" name="quantity" className='quantityInput' min={0}/>
                </div>
                <button className="addToCartBtn">
                    Add to Cart<span><FaCartPlus/></span>
                </button>
            </div>

        </div>
    );
}

export default ProductDetails;