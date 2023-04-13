import {FC, useEffect, useState} from 'react';
import axios from 'axios';

import '../styles/Products.scss';

import HeroBanner from './HeroBanner';
import Card from './Card';

interface Props{

}

interface Product {
    id?: string;
    title: string;
    image: string;
}

const Products: FC <Props> = () => {

    const [allProducts, setAllProducts] = useState<Product[]>([]);

    // const options = {
    // method: 'GET',
    // url: 'https://the-mexican-food-db.p.rapidapi.com/',
    // headers: {
    //     'X-RapidAPI-Key': '0e080c7fe2mshbaae96571089130p16a7bbjsn016819b32a15',
    //     'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
    // }
    // };

    // useEffect(() => {
        
    //     axios.get(options.url, { headers: options.headers })
    //     .then(function (response: { data: any; }){
    //         setAllProducts(response.data)
    //     }).catch(function (error: any) {
    //         console.error(error);
    //     });

    // },[])

    
    return(
        <>
        <HeroBanner title={'Welcome to Mexican Delivery'} />
        <div className="products">
            <h2>See all dishes here:</h2>
            <div className="gridContainer">
                {/* {
                    allProducts.map((product) => (
                        <Card
                            key={product.id} 
                            productID={product.id} 
                            productName={product.title}
                            imageURL={product.image} 
                            productAlt={product.title} 
                        />
                    ))
                } */}
                <Card
                            key={'1'} 
                            productID={'1'} 
                            productName={'1'}
                        />
                        <Card
                            key={'1'} 
                            productID={'1'} 
                            productName={'1'}
                        />
                        <Card
                            key={'1'} 
                            productID={'1'} 
                            productName={'1'}
                            imageURL={''}
                        />
            </div>
        </div>
        </>
    );

}

export default Products;