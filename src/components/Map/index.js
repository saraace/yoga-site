/** @jsx jsx */
import { jsx } from 'theme-ui';
import { MapContainer, Buttons, GetDirectionsButton, SeeLocationButton } from './styles';

const Map = ({ lat, lng, width, height, directionsLink, locationLink }) => {
    return(
        <MapContainer style={{ width }}>
            <img src={`https://maps.googleapis.com/maps/api/staticmap?center=`+lat+`,`+lng+`&zoom=18&size=`+width+`x`+height+`&key=`+process.env.GOOGLE_MAPS_API} />
            <Buttons>
                {directionsLink && <GetDirectionsButton href={directionsLink}>Get Directions</GetDirectionsButton>}
                {locationLink && <SeeLocationButton href={locationLink}>See Location</SeeLocationButton>}
            </Buttons>
        </MapContainer>
    )
}

export default Map;