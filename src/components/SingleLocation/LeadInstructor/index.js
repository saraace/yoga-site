/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from "prop-types";
import Link from 'next/link';
import { Instructor, ImageContainer, Bio, Name, Title, ButtonRow } from './styles';
import PlayIcon from '../../../assets/svgs/play-icon.svg';
import HeartOutlineIcon from '../../../assets/svgs/heart-outline.svg';

const LeadInstructor = ({ name, title, image, bio, link, followLink }) => {
    return(
        <Instructor>
            <ImageContainer>
                <img src={image} alt={name}/>
                <ButtonRow>
                    {link && <div>
                        <Link href={link}>
                            <a sx={{ variant: "buttons.highlight-outline-square-icon" }} title="See Her story"><PlayIcon />See Her story</a>
                        </Link>
                    </div>}
                    {followLink && <div>
                        <Link href={followLink}>
                            <a sx={{ variant: "buttons.secondary-outline-square-icon" }}><HeartOutlineIcon />Follow</a>
                        </Link>
                    </div>}
                </ButtonRow>
            </ImageContainer>
            <div>
                <Name>{name}</Name>
                <Title>{title}</Title>
                {bio && <Bio dangerouslySetInnerHTML={{ __html: bio }}></Bio>}
            </div>
        </Instructor>
    )
}

LeadInstructor.propTypes = {
    name: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    image: PropTypes.string.isRequired, 
    bio: PropTypes.string, 
    link: PropTypes.string, 
    followLink: PropTypes.string
}

export default LeadInstructor;