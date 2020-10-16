/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';
import { Instructor, Image, Details, Name, Title, Bio, Location, SectionTitle, Map } from './styles';

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
                <Map></Map>
            </Location>
        </>
    )
}

export default SingleInstructor;