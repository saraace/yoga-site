/** @jsx jsx */
import { jsx } from 'theme-ui';
import { MapContainer, Buttons, GetDirectionsButton, SeeLocationButton } from './styles';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const Map = ({ lat, lng, width, height, directionsLink, locationLink }) => {
    return(
        <MapContainer>
            <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API}>
                <GoogleMap 
                    mapContainerStyle={{ width, height, borderRadius: '8px' }}
                    center={{ lat, lng }}    
                    zoom={15}
                    options={{ disableDefaultUI: true }}
                >   
                    <Marker position={{ lat, lng }}></Marker>
                </GoogleMap>
            </LoadScript>
            <Buttons>
                {directionsLink && <GetDirectionsButton href={directionsLink}>Get Directions</GetDirectionsButton>}
                {locationLink && <SeeLocationButton href={locationLink}>See Location</SeeLocationButton>}
            </Buttons>
        </MapContainer>
    )
}

export default Map;