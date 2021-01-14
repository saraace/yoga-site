import PropTypes from "prop-types";
import { Location, Pin, Address, Title, Tagline } from './styles';

const LocationHeader = ({ address, title, tagline, children }) => {
    return(
        <Location>
            <Pin />
            <Address>{address}</Address>
            <Title>{title}</Title>
            {tagline && <Tagline>{tagline}</Tagline>}
            {children}
        </Location>
    )
}

LocationHeader.propTypes = {
    address: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string
}

export default LocationHeader;