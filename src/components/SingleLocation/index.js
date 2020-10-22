/** @jsx jsx */
import { jsx, Button } from 'theme-ui';
import PropTypes from "prop-types";
import Link from 'next/link';
import { Location, Title, Address, ButtonRow, Row, Map, Services, Service } from './styles';
import LeadInstructor from './LeadInstructor';
import PhotoWall from './PhotoWall'; 
import InstructorsGrid from './InstructorsGrid';
import YogaIcon from '../../assets/svgs/yoga-icon.svg';
import FiitIcon from '../../assets/svgs/fiit-icon.svg'; 
import RestoreIcon from '../../assets/svgs/restore-icon.svg'; 

const SingleLocation = ({ title, address, scheduleLink, signUpLink, coordinates, services, instructor, photoWallImages, instructors }) => {
    return(
        <>
            <Location>
                <Title>{title}</Title>
                <Address>{address}</Address>
                <ButtonRow>
                    <Link href={scheduleLink}>
                        <a sx={{ variant:"buttons.secondary-outline" }}>View Class Schedule</a>
                    </Link>
                    <Button variant="primary">Sign Up to this location</Button>
                </ButtonRow>
            </Location>
            <LeadInstructor {...instructor} />
            <Row>
                <div>
                    <h3>Location</h3>
                    <Map {...coordinates} />
                </div>
                <div>
                    <h3>Services</h3>
                    <Services>
                        {services.map((service, i) => (
                            <Service key={i} className={service}>
                                {service === 'yoga' && <YogaIcon />}
                                {service === 'fiit' && <FiitIcon />}
                                {service === 'restore' && <RestoreIcon />}
                                <span>{service}</span>
                            </Service>
                        ))}
                    </Services>
                </div>
            </Row>
            {photoWallImages && <PhotoWall images={photoWallImages} />}
            {instructors && <InstructorsGrid {...{instructors}} />}
        </>
    )
}

SingleLocation.propTypes = {
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    coordinates: PropTypes.shape({
        lat: PropTypes.number.isRequired, 
        lng: PropTypes.number.isRequired
    }).isRequired,
    services: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructor: PropTypes.shape({
        name: PropTypes.string, 
        title: PropTypes.string, 
        image: PropTypes.string, 
        bio: PropTypes.string, 
        link: PropTypes.string, 
        followLink: PropTypes.string
    }).isRequired,
    photoWallImages: PropTypes.arrayOf(PropTypes.string),
    instructors: PropTypes.arrayOf(
        PropTypes.shape({
            slug: PropTypes.string, 
            name: PropTypes.string, 
            image: PropTypes.string
        })
    )
}

export default SingleLocation;