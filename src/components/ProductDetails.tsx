import {FC, useEffect, useState} from 'react';
import { FaCartPlus } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';

import '../styles/ProductDetails.scss';

interface Props{
    productID?: string;
}

interface ProductDetails {
    id?: string;
    title: string;
    portion?: string;
    ingredients?: [];
    image: string;
}

const ProductDetails: FC<Props> = (props: Props) => {

    const { productID } = useParams<{ productID: string }>();
    const [details, setDetails] = useState<ProductDetails[]>([]);
    const [idNumber, setIdNumber] = useState();

    console.log(productID);

    const getPrice = () => {
        return Number(details[0].id)*10;
    }

    // const options = {
    //     method: 'GET',
    //     url: `https://the-mexican-food-db.p.rapidapi.com/${productID}`,
    //     headers: {
    //       'X-RapidAPI-Key': '0e080c7fe2mshbaae96571089130p16a7bbjsn016819b32a15',
    //       'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
    //     }
    //   };

    //   useEffect(()=> {
          
    //     axios.request(options).then(function (response) {
    //         setDetails(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });

    //   }, [])
      
      
      useEffect(()=> {
        const url = `https://the-mexican-food-db.p.rapidapi.com/${productID}`;
        console.log(url);
        const options = {
          method: 'GET',
          url: url,
          headers: {
            'X-RapidAPI-Key': '0e080c7fe2mshbaae96571089130p16a7bbjsn016819b32a15',
            'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
          }
        };
        axios.request(options)
          .then(function (response) {
            setDetails(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
      }, []);

    console.log(details);

    
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
                            <li className='ingredient' key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <p className="productPrice">{getPrice()} zł</p>
                    <div className="quantityContainer">
                        <p className="quantityText">Quantity: </p>
                        <input type="number" name="quantity" className='quantityInput' min={0}/>
                    </div>
                    <button className="addToCartBtn">
                    Add to Cart<span><FaCartPlus/></span>
                    </button>
                    <button className="backToMenuBtn">
                    <Link to={'/'}>Back to Menu</Link>
                    </button>
                </div>
            </>
        )}
    </div>
    );
}

export default ProductDetails;