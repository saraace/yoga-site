/** @jsx jsx */
import { jsx, Button, Container } from 'theme-ui';
import { useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { ButtonRow, Schedule, UpcomingClasses, Preview } from './styles';
import PageBackground from "../PageBackground";
import LocationHeader from "../SingleLocation/LocationHeader";
import UpcomingClass from './UpcomingClass';
import ClassPreview from './ClassPreview';

const SingleLocationSchedule = ({ address, title, link, tagline, classes }) => {

    const [ selectedClass, setSelectedClass ] = useState(null);

    const classPreview = { 
        title: 'Fusion Flow 60', 
        description: '<p>Super intensive yoga emphasizing body strength over flexibility.</p><p>Est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>', 
        difficulty: 'Moderate', 
        classType: 'yoga',
        duration: '45 minutes',
        time: '6:00pm - 9:00pm',
        image: '/images/classes/bg-class.jpg',
        reserved: true, 
        reservedSpot: "A3", 
        equipment: ['Yoga mat', 'yoga block', 'towel', 'bottle of water'], 
        muscleGroups: ['Shoulders', 'legs', 'core', 'biceps'],
        instructor: {
            name: 'Paige Held', 
            bio: 'Alexandra is an 8 year veteran of the U.S. Army who brings that bootcamp style of fitness to the yoga mat. She has a Masters Degree in Kiniseology from the University of Boston.', 
            image: '/images/instructors/paige-held.png'
        },
        location: {
            title,
            link,
            coordinates: {
                lat: 0, 
                lng: 0,
            }
        }
    }

    return(
        <>
            <PageBackground src="/images/single-location/bg.jpg" />
            <Container variant="large">
                <LocationHeader {...{ title, address, tagline }} >
                    <ButtonRow>
                        <Link href="/locations">
                            <a sx={{ variant:"buttons.secondary-outline" }}>Change Studio Location</a>
                        </Link>
                    </ButtonRow>
                </LocationHeader>
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
    address: PropTypes.string,
    title: PropTypes.string, 
    tagline: PropTypes.string,
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