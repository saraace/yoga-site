import PropTypes from 'prop-types';
import { Name, Title, Classes } from "./styles";
import Card from "../index";

const InstructorCard = ({ name, title, classes, image, link, width, height }) => {
    return(
        <Card title={name} {...{image}} {...{link}} alt={title} {...{width}} {...{height}} >
            <div></div>
            <div>
                <Name>{name}</Name>
                <Title>{title}</Title>
                <Classes>{classes} Classes</Classes>
            </div>
        </Card>
    );
}

InstructorCard.defaultProps = {
    name: "", 
    title: "", 
    classes: "", 
    image: "", 
    link: "/",
    width: "280px", 
    height: "460px"
};

InstructorCard.propTypes = {
    name: PropTypes.string.isRequired, 
    title: PropTypes.string,
    classes: PropTypes.string, 
    image: PropTypes.string.isRequired, 
    link: PropTypes.string.isRequired, 
    width: PropTypes.string, 
    height: PropTypes.string
}

export default InstructorCard;