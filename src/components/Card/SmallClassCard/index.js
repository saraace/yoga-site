import PropTypes from 'prop-types';
import { CardWrapper, CardHeader, CardFooter, ClassType, Details } from "./styles";

const SmallClassCard = ({ title, link, teacher, difficulty, duration, type, date, time, image }) => {
    return(
        <CardWrapper {...{title}} {...{image}} {...{link}} alt={title} >
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
                    <span>{teacher}</span>
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
    teacher: "",
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
    teacher: PropTypes.string,
    difficulty: PropTypes.string,
    duration: PropTypes.string,
    type: PropTypes.oneOf(['follow', 'fiit', 'restore']),
    date: PropTypes.string,
    time: PropTypes.string,
    image: PropTypes.string.isRequired
}

export default SmallClassCard;