/** @jsx jsx */
import { jsx, Button, Container } from 'theme-ui';
import PropTypes from "prop-types";
import Link from 'next/link';
import { ButtonRow, Body } from './styles';
import PageBackground from "../PageBackground";
import LocationHeader from "./LocationHeader";
import LocationIntro from "./LocationIntro";
import LeadInstructor from './LeadInstructor';
import PhotoWall from './PhotoWall'; 

const SingleLocation = ({ address, title, tagline, description, scheduleLink, signUpLink, phone, coordinates, instructor, photoWallImages }) => {
    return(
        <>
            <PageBackground src="/images/single-location/bg.jpg" />
            <Container>
                <LocationHeader {...{ address, title, tagline, scheduleLink, signUpLink }} >
                    <ButtonRow>
                        <Link href={scheduleLink}>
                            <a sx={{ variant:"buttons.secondary-outline" }}>View Class Schedule</a>
                        </Link>
                        <Button variant="primary">Sign Up to this location</Button>
                    </ButtonRow>
                </LocationHeader>
            </Container>
            <Body variant="small">
                <LocationIntro {...{ name: title, tagline, description, phone, coordinates }} />
                <LeadInstructor {...instructor} />
                {photoWallImages && <PhotoWall images={photoWallImages} />}
            </Body>
        </>
    )
}

SingleLocation.propTypes = {
    address: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    description: PropTypes.string,
    scheduleLink: PropTypes.string,
    signUpLink: PropTypes.string,
    phone: PropTypes.string,
    coordinates: PropTypes.shape({
        lat: PropTypes.number.isRequired, 
        lng: PropTypes.number.isRequired
    }).isRequired,
    instructor: PropTypes.shape({
        name: PropTypes.string, 
        title: PropTypes.string, 
        image: PropTypes.string, 
        bio: PropTypes.string, 
        link: PropTypes.string, 
        followLink: PropTypes.string
    }).isRequired,
    photoWallImages: PropTypes.arrayOf(PropTypes.string),
}

export default SingleLocation;