import PropTypes from 'prop-types';
import { CardWrapper, Name, Title, Location } from "./styles";

const InstructorCard = ({ name, title, location, image, link, onClick, variant }) => {
    return(
        <CardWrapper title={name} {...{ image, link, onClick}} className={variant ? variant : 'default'} alt={title}>
            <div></div>
            <div>
                <Name>{name}</Name>
                <Title>{title}</Title>
                {location && <Location>{location}</Location>}
            </div>
        </CardWrapper>
    );
}

InstructorCard.defaultProps = {
    name: "", 
    title: "", 
    location: "",
    image: "", 
    variant: ""
};

InstructorCard.propTypes = {
    name: PropTypes.string.isRequired, 
    title: PropTypes.string,
    location: PropTypes.string,
    image: PropTypes.string.isRequired, 
    link: PropTypes.string, 
    onClick: PropTypes.func,
    variant: PropTypes.string
}

export default InstructorCard;