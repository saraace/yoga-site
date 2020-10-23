/** @jsx jsx */
import { jsx, Button, Container } from 'theme-ui';
import { useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Location, Title, Address, ButtonRow, Schedule, UpcomingClasses, Preview } from './styles';
import UpcomingClass from './UpcomingClass';
import ClassPreview from './ClassPreview';

const SingleLocationSchedule = ({ title, address, classes }) => {

    const [ selectedClass, setSelectedClass ] = useState(null);

    const classPreview = { 
        title: 'Fusion Flow 60', 
        description: 'Super intensive yoga emphasizing body strength over flexibility.', 
        difficulty: 'Moderate', 
        time: '6:00pm - 9:00pm',
        image: '/images/classes/bg-class.jpg',
        equipment: ['Yoga mat', 'yoga block', 'towel', 'bottle of water'], 
        muscleGroups: ['Shoulders', 'legs', 'core', 'biceps'],
        instructor: {
            name: 'Paige Held', 
            bio: 'Alexandra is an 8 year veteran of the U.S. Army who brings that bootcamp style of fitness to the yoga mat. She has a Masters Degree in Kiniseology from the University of Boston.', 
            link: '/instructors/paige-held', 
            image: '/images/instructors/paige-held.png'
        },
        location: {
            coordinates: {
                lat: 0, 
                lng: 0,
            }
        }
    }

    return(
        <>
            <Container variant="small">
                <Location>
                    <Title>{title}</Title>
                    <Address>{address}</Address>
                    <ButtonRow>
                        <Link href="/locations">
                            <a sx={{ variant:"buttons.secondary-outline" }}>Change Studio Location</a>
                        </Link>
                    </ButtonRow>
                </Location>
            </Container>
            <Container variant="large">
                <Schedule>
                    <UpcomingClasses>
                        {classes.map((c, i) => (
                            <UpcomingClass key={i} {...c} onClick={() => setSelectedClass(c.id)} className={selectedClass === c.id? 'selected' : ''} />
                        ))}
                    </UpcomingClasses>
                    <Preview>
                        {selectedClass && <ClassPreview {...classPreview} />}
                    </Preview>
                </Schedule>
            </Container>
        </>
    )
}

SingleLocationSchedule.propTypes = {
    title: PropTypes.string, 
    address: PropTypes.string,
    classes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string, 
            date: PropTypes.object,
            time: PropTypes.string, 
            duration: PropTypes.string, 
            instructor: PropTypes.string, 
        })
    )
}

export default SingleLocationSchedule;