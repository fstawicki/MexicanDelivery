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
                <p className='details'>Details: </p>
                <p className="description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus magnam accusantium, cupiditate quas praesentium cum exercitationem, est debitis beatae minima sint pariatur totam error ullam doloribus, iure obcaecati magni rerum quidem consequatur ratione repellat nisi. Atque, architecto nesciunt odit beatae et qui perspiciatis ipsum est quaerat quae sint illum assumenda reprehenderit ut magni obcaecati consectetur? Cum voluptate consequatur reprehenderit at! Suscipit reprehenderit culpa, dolorum dicta dolores fuga amet eum fugit aperiam ex, corrupti provident minus nisi. Maiores deleniti illum adipisci eveniet quod, in sed reprehenderit.
                </p>
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