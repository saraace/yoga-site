import { Button } from 'theme-ui';
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
                    <Button variant="secondary-outline">View Class Schedule</Button>
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
            <PhotoWall images={photoWallImages} />
            <InstructorsGrid {...{instructors}} />
        </>
    )
}

export default SingleLocation;