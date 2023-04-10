import {FC} from 'react';

import '../styles/NoPage.scss';


interface Props{

}

const NoPage:FC<Props> = () => {

    return(
        <div className="NoPage">
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>This page does not exist</p>
        </div>
    );

}

export default NoPage;