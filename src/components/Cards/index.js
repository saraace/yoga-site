import PropTypes from 'prop-types';
import Link from "next/link";
import { CardContainer, Image, CardContent } from "./styles";

const Card = ({ link, onClick, title, image, width, height, children, ...rest }) => {

    const cardContainer = () => (
        <CardContainer {...{ title, onClick }} {...rest} >
            <Image src={image} alt={title} />
            <CardContent>
                {children}
            </CardContent>
        </CardContainer>
    );

    return(
        <>
            {link ? (
                <Link href={link}>
                    {cardContainer()}
                </Link>
            ) : (
                <>
                    {cardContainer()}
                </>
            )}
        </>
    ); 
}

Card.defaultProps = {
    title: "",
    image: "", 
    width: "", 
    height: ""
};

Card.propTypes = {
    link: PropTypes.string,
    onClick: PropTypes.func, 
    title: PropTypes.string, 
    image: PropTypes.string.isRequired, 
    width: PropTypes.string.isRequired, 
    height: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default Card;