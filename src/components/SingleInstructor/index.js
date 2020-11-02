/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from "prop-types";
import Link from 'next/link';
import { Instructor, Image, Details, Name, Title, Bio, Location, SectionTitle } from './styles';
import Map from '../Map';

const SingleInstructor = ({ name, title, image, location, bio }) => {
    return(
        <>
            <Instructor>
                <Image>
                    <img src={image} alt={name} />
                </Image>
                <Details>
                    <Name>{name}</Name>
                    <Title>{title} @ <Link href={"/locations/"+location.id} ><a title={location.title}>{location.title}</a></Link></Title>
                    <div>
                        <Link href="/">
                            <a sx={{ variant: 'buttons.highlight-outline' }} title="See Her story">See Her story</a>
                        </Link>
                    </div>
                </Details>
            </Instructor>
            <Bio dangerouslySetInnerHTML={{ __html: bio }}></Bio>
            <Location>
                <SectionTitle>Location</SectionTitle>
                <Map lat={location.coordinates.lat} lng={location.coordinates.lng} width='100%' height={310}></Map>
            </Location>
        </>
    )
}

SingleInstructor.propTypes = {
    name: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    image: PropTypes.string.isRequired, 
    location: PropTypes.shape({
        id: PropTypes.string, 
        title: PropTypes.string, 
        lat: PropTypes.number, 
        lng: PropTypes.number
    }).isRequired, 
    bio: PropTypes.string.isRequired
}

export default SingleInstructor;