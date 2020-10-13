import PropTypes from 'prop-types';
import { CardWrapper, CardHeader, DesktopHeader, MobileHeader, CardFooter, DesktopFooter, MobileFooter, Details } from "./styles";
import ClassTypeBadge from '../../ClassTypeBadge';

const FeaturedClassCard = ({ title, link, instructor, difficulty, duration, type, date, time, image, ...rest }) => {
    return(
        <CardWrapper {...{title}} {...{image}} {...{link}} alt={title} {...rest}>
            <CardHeader>
                <DesktopHeader>
                    <div>
                        <div>{date}</div>
                        <div>{time}</div>
                    </div>
                    <div>
                        <ClassTypeBadge {...{type}} />
                    </div>
                </DesktopHeader>
                <MobileHeader>
                    <Details>
                        <span>Strength</span>
                        <span>{difficulty}</span>
                    </Details>
                </MobileHeader>
            </CardHeader>
            <CardFooter>
                <DesktopFooter>
                    <h3>{title}</h3>
                    <Details>
                        <span>{instructor}</span>
                        <span>{difficulty}</span>
                        <span>{duration}</span>
                    </Details>
                </DesktopFooter>
                <MobileFooter>
                    <h3>Hips and Legs: Finding Freedom through Foundation</h3>
                    <span>With {instructor}</span>
                </MobileFooter>
            </CardFooter>
        </CardWrapper>
    )
}

FeaturedClassCard.defaultProps = {
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

FeaturedClassCard.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    instructor: PropTypes.string,
    difficulty: PropTypes.string,
    duration: PropTypes.string,
    type: PropTypes.oneOf(['follow', 'fiit', 'restore']),
    date: PropTypes.string,
    time: PropTypes.string,
    image: PropTypes.string.isRequired, 
}

export default FeaturedClassCard;