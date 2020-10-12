import PropTypes from 'prop-types';
import { CardWrapper, CardHeader, CardFooter, ClassType, Details } from "./styles";

const SmallClassCard = ({ title, link, instructor, difficulty, duration, type, date, time, image, variant,...rest }) => {
    return(
        <CardWrapper {...{title}} {...{image}} {...{link}} alt={title} className={variant ? variant : 'default'} {...rest} >
            <CardHeader>
                <div>
                    <div>{date}</div>
                    <div>{time}</div>
                </div>
                <div>
                    <ClassType className={type}>{type === "follow"? "Yoga Follow" : type}</ClassType>
                </div>
            </CardHeader>
            <CardFooter>
                <h3>{title}</h3>
                <Details>
                    <span>{instructor}</span>
                    <span>{difficulty}</span>
                    <span>{duration}</span>
                </Details>
            </CardFooter>
        </CardWrapper>
    )
}

SmallClassCard.defaultProps = {
    title: "",
    link: "/",
    instructor: "",
    difficulty: "",
    duration: "",
    type: "follow",
    date: "",
    time: "",
    image: ""
};

SmallClassCard.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    instructor: PropTypes.string,
    difficulty: PropTypes.string,
    duration: PropTypes.string,
    type: PropTypes.oneOf(['follow', 'fiit', 'restore']),
    date: PropTypes.string,
    time: PropTypes.string,
    image: PropTypes.string.isRequired
}

export default SmallClassCard;