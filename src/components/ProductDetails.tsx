import { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { BiArrowBack, BiChevronRight } from 'react-icons/bi';

import '../styles/ProductDetails.scss';

interface ProductDetails {
    id?: string;
    title: string;
    portion?: string;
    ingredients?: [];
    image: string;
}

const ProductDetails: FC = () => {
  
  const { productId } = useParams<string>();
  const navigate = useNavigate();
  const [details, setDetails] = useState<ProductDetails []>([]);
  
    
    const getPrice = () => {
        return Number(details[0]?.id)*10;
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

    
    return(
        <div className="productDetails">
          
      {details[0] && (
            <>
                <div className="productImage">
                    <img src={details[0].image} alt={details[0].title} className="image" />
                </div>
                <div className="productDescription">
                    <h1 className='detailsProductName'>{details[0].title}</h1>
                    <p className='ingredients'>Ingredients: </p>
                    <ul className="ingredientList">
                      {details[0].ingredients?.map((ingredient: string, index: number)=> (
                        <li className='ingredient' key={index}><span><BiChevronRight/></span>{ingredient}</li>
                      ))}
                    </ul>
                    <p className="productPrice">Price: {getPrice()} zł</p>
                    <button className="btn backToMenuBtn" onClick={() => {navigate('/');}}><BiArrowBack/><span>Back to Menu</span></button>
                </div>
            </>
        )}
    </div>


    );
}

export default ProductDetails;