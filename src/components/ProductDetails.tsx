import { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { FaCartPlus } from "react-icons/fa";
import { BiArrowBack, BiChevronRight } from 'react-icons/bi';

import '../styles/ProductDetails.scss';
import { useShoppingCart } from '../store/CartContext';

interface ProductDetails {
    id?: string;
    title: string;
    portion?: string;
    ingredients?: [];
    image: string;
}

const ProductDetails: FC = () => {

  const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()

  
  const { productId } = useParams<string>();
  const navigate = useNavigate();
  const [details, setDetails] = useState<ProductDetails []>([]);
  
    
    const getPrice = () => {
        return Number(details[0].id)*10;
    }
      
        const url = `https://the-mexican-food-db.p.rapidapi.com/${productId}`;
        const options = {
          method: 'GET',
          url: url,
          headers: {
            'X-RapidAPI-Key': '0e080c7fe2mshbaae96571089130p16a7bbjsn016819b32a15',
            'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
          }
        };

        useEffect(() => {
          axios.request(options)
            .then(function (response) {
              setDetails(old => [...old, response.data]);
            })
            .catch(function (error) {
              console.error(error);
            });

        },[])

        const quantity = getItemQuantity(Number(details[0].id));

    
    return(
        <div className="productDetails">
      {details[0] && (
            <>
                <div className="productImage">
                    <img src={details[0].image} alt={details[0].title} className="image" />
                </div>
                <div className="productDescription">
                    <h1 className='productName'>{details[0].title}</h1>
                    <p className='ingredients'>Ingredients: </p>
                    <ul className="ingredientList">
                      {details[0].ingredients?.map((ingredient: string, index: number)=> (
                        <li className='ingredient' key={index}><span><BiChevronRight/></span>{ingredient}</li>
                      ))}
                    </ul>
                    <p className="productPrice">Price: {getPrice()} zł</p>
                    <div className="quantityContainer">
                        <p className="quantityText">Quantity: </p>
                        <input type="number" name="quantity" className='quantityInput' min={0}/>
                        <button className="btn addToCartBtn">Add to Cart<span><FaCartPlus/></span></button>
                    </div>

                    {quantity === 0 ? (
                    <div className="addItemDiv">
                        <button className="addToCartBtn" onClick={() => increaseCartQuantity(Number(details[0].id))}>
                            Add to Cart<span><FaCartPlus/></span>
                        </button>
                    </div>
                ) : (
                <div className="addItemDiv">
                    <div className="smallButtons">
                        <button className="smallBtn" onClick={() => decreaseCartQuantity(Number(details[0].id))}>-</button>
                        <p className="text"><span className="amount">{quantity}</span> in cart</p>
                        <button className="smallBtn" onClick={() => increaseCartQuantity(Number(details[0].id))}>+</button>
                    </div>
                    <div className="removeBtnDiv">
                        <button className="removeBtn" onClick={() => removeFromCart(Number(details[0].id))}>Remove Item</button>
                    </div>
                </div>
                )}

                    <button className="btn backToMenuBtn" onClick={() => {navigate('/');}}><BiArrowBack/><span>Back to Menu</span></button>
                </div>
            </>
        )}
    </div>


    );
}

export default ProductDetails;