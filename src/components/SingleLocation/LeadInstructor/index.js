/** @jsx jsx */
import { jsx } from 'theme-ui';
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
                    <div>
                        <Link href={link}>
                            <a sx={{ variant: "buttons.highlight-outline-square" }} title="See Her story"><PlayIcon />See Her story</a>
                        </Link>
                    </div>
                    <div>
                        <Link href={followLink}>
                            <a sx={{ variant: "buttons.secondary-outline-square" }}><HeartOutlineIcon />Follow</a>
                        </Link>
                    </div>
                </ButtonRow>
            </ImageContainer>
            <div>
                <Name>{name}</Name>
                <Title>{title}</Title>
                <Bio dangerouslySetInnerHTML={{ __html: bio }}></Bio>
            </div>
        </Instructor>
    )
}

export default LeadInstructor;