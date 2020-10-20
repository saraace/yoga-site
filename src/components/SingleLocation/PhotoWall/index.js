import PropTypes from "prop-types";
import { Wall, Grid, Tile } from './styles';

const PhotoWall = ({ images }) => {
    return(
        <Wall>
            <h3>Photowall</h3>
            <Grid>
                {images.map((image, i) => (
                    <Tile key={i}>
                        <img src={image} alt="" />
                    </Tile>
                ))}
            </Grid>
        </Wall>
    )
}

PhotoWall.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string)
}

export default PhotoWall;