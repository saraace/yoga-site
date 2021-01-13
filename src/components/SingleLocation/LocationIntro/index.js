import { Intro, Tagline, Description, MapContainer, PhoneNumber } from "./styles";
import PhoneIcon from "../../../assets/svgs/phone-icon.svg";
import Map from "../../Map";

const LocationIntro = ({ name, tagline, description, phone, coordinates }) => {
    return(
        <Intro>
            <div>
                <h2>{name}</h2>
                <Tagline>{tagline}</Tagline>
                <Description dangerouslySetInnerHTML={{ __html: description }}></Description>
            </div>
            <div>
                <MapContainer>
                    <h3>Location Details</h3>
                    <Map 
                        {...coordinates} 
                        width={343} 
                        height={192}
                        directionsLink="#"
                    />
                    <PhoneNumber href={"tel:"+phone}>
                        <PhoneIcon />
                        {phone}
                    </PhoneNumber>
                </MapContainer>
            </div>
        </Intro>
    )
}

export default LocationIntro;