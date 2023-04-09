import {FC} from "react";
import '../styles/HeroBanner.scss';

interface Props{
    title: string;
}

const HeroBanner: FC<Props> = (props) => {

    return(
        <div className="heroBanner">
            <h2>{props.title}</h2>
        </div>
    );

}

export default HeroBanner;