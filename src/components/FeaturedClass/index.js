/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import Link from 'next/link'; 
import { ClassWrapper, CardWrapper, Card, Content, ButtonRow } from "./styles";
import ClassCard from "../Cards/ClassCard";
import PlayIcon from "../../assets/svgs/play-icon.svg"; 
import InfoIcon from "../../assets/svgs/info-icon.svg"; 

const FeaturedClass = ({ card, title, watchLink, infoLink, description }) => {
    return(
        <ClassWrapper>
            <CardWrapper>
                <ClassCard {...card} variant="featured" />
            </CardWrapper>
            <Content>
                <h2>{title}</h2>
                <ButtonRow>
                    <div>
                        <Link href={watchLink}>
                            <a sx={{ variant: 'buttons.primary-icon' }} ><PlayIcon />Watch Exercise</a>
                        </Link>
                    </div>
                    <div>
                        <Link href={infoLink}>
                            <a sx={{ variant: 'buttons.secondary-icon' }} ><InfoIcon />More Info</a>
                        </Link>
                    </div>
                </ButtonRow>
                <p>{description}</p>
            </Content>
        </ClassWrapper>
    )
}

FeaturedClass.defaultProps = {
    card: {}, 
    title: "", 
    watchLink: "", 
    infoLink: "", 
    description: "",
}

FeaturedClass.propTypes = {
    card: PropTypes.object, 
    title: PropTypes.string, 
    watchLink: PropTypes.string, 
    infoLink: PropTypes.string, 
    description: PropTypes.string
}

export default FeaturedClass;