import PropTypes from 'prop-types';
import Link from "next/link";
import { CardContainer, Image, CardContent } from "./styles";

const Card = ({ link, title, image, width, height, children, ...rest }) => {
    return(
        <Link href={link}>
            <CardContainer {...{title}} {...rest}>
                <Image src={image} alt={title} />
                <CardContent>
                    {children}
                </CardContent>
            </CardContainer>
        </Link>
    ); 
}

Card.defaultProps = {
    link: "/", 
    title: "",
    image: "", 
    width: "", 
    height: ""
};

Card.propTypes = {
    link: PropTypes.string.isRequired, 
    title: PropTypes.string, 
    image: PropTypes.string.isRequired, 
    width: PropTypes.string.isRequired, 
    height: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default Card;