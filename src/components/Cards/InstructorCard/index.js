import PropTypes from 'prop-types';
import { CardWrapper, Name, Title, Classes } from "./styles";

const InstructorCard = ({ name, title, classes, image, link }) => {
    return(
        <CardWrapper title={name} {...{image}} {...{link}} alt={title}>
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
    link: "/"
};

InstructorCard.propTypes = {
    name: PropTypes.string.isRequired, 
    title: PropTypes.string,
    classes: PropTypes.string, 
    image: PropTypes.string.isRequired, 
    link: PropTypes.string.isRequired
}

export default InstructorCard;