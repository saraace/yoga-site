import PropTypes from 'prop-types';
import { CardWrapper, Name, Title, Classes } from "./styles";

const InstructorCard = ({ name, title, classes, image, link, variant }) => {
    return(
        <CardWrapper title={name} {...{image}} {...{link}} className={variant ? variant : 'default'} alt={title}>
            <div></div>
            <div>
                <Name>{name}</Name>
                <Title>{title}</Title>
                <Classes>{classes} Classes</Classes>
            </div>
        </CardWrapper>
    );
}

InstructorCard.defaultProps = {
    name: "", 
    title: "", 
    classes: "", 
    image: "", 
    link: "/", 
    variant: ""
};

InstructorCard.propTypes = {
    name: PropTypes.string.isRequired, 
    title: PropTypes.string,
    classes: PropTypes.string, 
    image: PropTypes.string.isRequired, 
    link: PropTypes.string.isRequired, 
    variant: PropTypes.string
}

export default InstructorCard;