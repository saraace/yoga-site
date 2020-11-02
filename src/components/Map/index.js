/** @jsx jsx */
import { jsx } from 'theme-ui';
//import { MapContainer } from './styles';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const Map = ({ lat, lng, width, height }) => {
    return(
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
    )
}

export default Map;