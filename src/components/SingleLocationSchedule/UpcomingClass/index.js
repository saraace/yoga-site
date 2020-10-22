import PropTypes from "prop-types";
import { Button, Date, Month, Day, ClassInfo, Title, Time, Instructor, Arrow } from './styles';
import ChevronRight from '../../../assets/svgs/chevron-right.svg';

const UpcomingClass = ({ title, date, time, duration, instructor, ...rest }) => {
    return(
        <Button {...rest} >
            <Date>
                <Month>{date.month}</Month>
                <Day>{date.day}</Day>
            </Date>
            <ClassInfo>
                <Title>{title}</Title>
                <Time>{time} ({duration})</Time>
                <Instructor>{instructor}</Instructor>
            </ClassInfo>
            <Arrow>
                <ChevronRight />
            </Arrow>
        </Button>
    )
}

UpcomingClass.propTypes = {
    title: PropTypes.string, 
    date: PropTypes.object,
    time: PropTypes.string, 
    duration: PropTypes.string, 
    instructor: PropTypes.string, 
}

export default UpcomingClass;