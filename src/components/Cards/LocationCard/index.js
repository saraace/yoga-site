import PropTypes from 'prop-types';
import Link from "next/link";
import Pin from "../../../assets/svgs/location-pin.svg";
import { CardContainer, Image, CardContent, Address } from "./styles";

const LocationCard = ({ link, title, image, address, children, ...rest }) => {
    return(
        <Link href={link}>
            <CardContainer {...{title}} {...rest}>
                <Image src={image} alt={title} />
                <CardContent>
                    <h2>{title}</h2>
                    {children}
                    <Address>
                        <div><Pin /></div>
                        <div>{address}</div>
                    </Address>
                </CardContent>
            </CardContainer>
        </Link>
    ); 
}

LocationCard.defaultProps = {
    link: "/", 
    title: "",
    image: "", 
    address: ""
};

LocationCard.propTypes = {
    link: PropTypes.string.isRequired, 
    title: PropTypes.string, 
    image: PropTypes.string.isRequired, 
    address: PropTypes.string.isRequired
}

export default LocationCard;