import Link from "next/link";  
import { Container, Button } from "theme-ui"; 
import FullScreenLightbox from "../FullScreenLightbox";
import LocationPin from "../../assets/svgs/location-pin.svg";
import { Teacher, ImageWrapper, Info, Name, Title, Quote, Bio, Locations, Location, LocationName, Address, CTA, Gallery, Image } from "./styles"; 

const TeacherLightbox = ({ image, name, title, quote, bio, locations, onClose, cta }) => {
    return(
        <FullScreenLightbox {...{onClose}}>
            <Container variant="small">
                <Teacher>
                    <ImageWrapper>
                        <img src={image} alt={name} />
                    </ImageWrapper>
                    <Info>
                        <Name>{name}</Name>
                        <Title>{title}</Title>
                        <Quote>{quote}</Quote>
                        <Bio>{bio}</Bio>
                    </Info>
                </Teacher>
                {cta? (
                    <CTA>
                        <h2>Interested in becoming a teacher&nbsp;for&nbsp;SHIFT?</h2>
                        <Gallery>
                            <Image>
                                <img src="https://via.placeholder.com/500"/>
                            </Image>
                            <Image>
                                <img src="https://via.placeholder.com/500"/>
                            </Image>
                            <Image>
                                <img src="https://via.placeholder.com/500"/>
                            </Image>
                        </Gallery>
                        <div>We're always looking for inspirational talent</div>
                        <Link href="/careers">
                            <Button variant="primary">Join Our Team</Button>
                        </Link>
                    </CTA>
                ) : (
                    <Locations>
                        {locations && locations.map((location, i) => {
                            return (
                                <Location key={i} >
                                    <LocationName>{location.name}</LocationName>
                                    <Address>
                                        <LocationPin />
                                        <div>
                                            <span>{location.address_line_one}</span>
                                            {location.address_line_two && <span>&nbsp;{location.address_line_two}</span>}
                                            <span>&nbsp;{location.city},</span>
                                            <span>&nbsp;{location.state_province}</span>
                                            <span>&nbsp;{location.postal_code}</span>
                                        </div>
                                    </Address>
                                    <Button variant="primary">Sign Up To This Location</Button>
                                </Location>
                            )
                        })}
                    </Locations>
                )}
            </Container>
        </FullScreenLightbox>
    )
}

TeacherLightbox.defaultProps = {
    cta: false
}

export default TeacherLightbox;