import { FC, useEffect } from 'react';
import axios from 'axios';
import HeroBanner from './HeroBanner';
import Card from './Card';
import { useShoppingCart } from '../store/CartContext';

import '../styles/Products.scss';

const Products: FC = () => {

    const { getApiData, allProducts } = useShoppingCart();

    const options = {
    method: 'GET',
    url: 'https://the-mexican-food-db.p.rapidapi.com/',
    headers: {
        'X-RapidAPI-Key': '0e080c7fe2mshbaae96571089130p16a7bbjsn016819b32a15',
        'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
    }
    };

    useEffect(() => {
        
        axios.get(options.url, { headers: options.headers })
        .then(function (response: { data: any; }){
            getApiData(response.data);
            console.log(allProducts);
        }).catch(function (error: any) {
            console.error(error);
        });

    },[])

    console.log(allProducts);
    
    return(
        <>
        <HeroBanner title={'Welcome to Mexican Delivery'} />
        <div className="products">
            <h2>See all dishes here:</h2>
            <div className="gridContainer">
                {
                    allProducts.map((product) => (
                        <Card
                            key={product.id} 
                            productID={product.id} 
                            productName={product.title}
                            imageURL={product.image} 
                            productAlt={product.title} 
                        />
                    ))
                }
            </div>
        </div>
        </>
    );

}

export default Products;