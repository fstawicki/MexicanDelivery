import {FC, useEffect, useState} from 'react';
import Card from './Card';
import axios from 'axios';

import '../styles/Products.scss';
import HeroBanner from './HeroBanner';

interface Props{

}

const Products: FC <Props> = () => {

    const options = {
    method: 'GET',
    url: 'https://the-mexican-food-db.p.rapidapi.com/',
    headers: {
        'X-RapidAPI-Key': '0e080c7fe2mshbaae96571089130p16a7bbjsn016819b32a15',
        'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
    }
    };

    axios.get(options.url, { headers: options.headers })
    .then(function (response: { data: any; }){
        console.log(response.data.slice(0,10));
    }).catch(function (error: any) {
        console.error(error);
    });

    return(
        <>
        <HeroBanner />
        <div className="products">
            <h2>See all dishes here:</h2>
            <div className="gridContainer">
            </div>
        </div>
        </>
    );

}

export default Products;