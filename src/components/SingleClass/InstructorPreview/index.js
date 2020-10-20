/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from "prop-types";;
import Link from 'next/link';
import { Section, SectionTitle, Preview, InstructorWrapper, Instructor, Bio, MobileButton } from './styles';

const InstructorPreview = ({ name, bio, link, image }) => {
    return(
        <Section>
            <SectionTitle>Instructor</SectionTitle>
            <Preview>
                <InstructorWrapper>
                    <Instructor>
                        <img src={image} alt={name}/>
                        <div>{name}</div>
                    </Instructor>
                    <Link href={link}>
                        <a sx={{ variant: 'buttons.highlight-outline-square' }} title="See Her story">See Her story</a>
                    </Link>
                </InstructorWrapper>
                <Bio>
                    {bio}
                    <MobileButton>
                        <Link href={link}>
                            <a sx={{ variant: 'buttons.highlight-outline-square' }} title="See Her story">See Her story</a>
                        </Link>
                    </MobileButton>
                </Bio>
            </Preview>
        </Section>
    )
}

InstructorPreview.defaultProps = {
    name: '', 
    bio: '', 
    link: '', 
    image: ''
}

InstructorPreview.propTypes = {
    name: PropTypes.string, 
    bio: PropTypes.string, 
    link: PropTypes.string, 
    image: PropTypes.string
}

export default InstructorPreview;