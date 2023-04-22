import { FC } from 'react';

import '../styles/NoPage.scss';

const NoPage: FC = () => {

    return(
        <div className="NoPage">
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>This page does not exist</p>
        </div>
    );

}

export default NoPage;