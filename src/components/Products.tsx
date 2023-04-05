import {FC} from 'react';
import Card from './Card';

import '../styles/Products.scss';
import HeroBanner from './HeroBanner';

interface Props{

}

const Products: FC <Props> = () => {

    return(
        <>
        <HeroBanner />
        <div className="products">
            <h2>See all dishes here:</h2>
            <div className="gridContainer">
                <Card productName={'1'} productPrice={30} />
                <Card productName={'2'} productPrice={0} />
                <Card productName={'3'} productPrice={0} />
                <Card productName={'4'} productPrice={0} />
                <Card productName={'5'} productPrice={0} />
                <Card productName={'6'} productPrice={0} />
                <Card productName={'7'} productPrice={0} />
                <Card productName={'8'} productPrice={0} />
            </div>
        </div>
        </>
    );

}

export default Products;