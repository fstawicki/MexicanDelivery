import {FC} from "react";
import '../styles/HeroBanner.scss';

interface Props{

}

const HeroBanner: FC<Props> = () => {

    return(
        <>
        <div className="heroBanner">
            <h2>Welcome to Mexican Delivery</h2>
        </div>
        </>
    );

}

export default HeroBanner;