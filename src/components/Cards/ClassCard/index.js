import PropTypes from 'prop-types';
import { CardWrapper, CardHeader, DateTime, CardFooter, Title, Details } from "./styles";
import ClassTypeBadge from '../../ClassTypeBadge';

const SmallClassCard = ({ title, link, instructor, difficulty, duration, type, date, time, image, variant,...rest }) => {
    return(
        <CardWrapper {...{title}} {...{image}} {...{link}} alt={title} className={variant ? variant : 'default'} {...rest} >
            <CardHeader>
                <DateTime>
                    <div>{date}</div>
                    <div>{time}</div>
                </DateTime>
                <div>
                    <ClassTypeBadge {...{type}} />
                </div>
            </CardHeader>
            <CardFooter>
                <Title>{title}</Title>
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
    type: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    image: PropTypes.string.isRequired
}

export default SmallClassCard;