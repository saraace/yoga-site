/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';
import { Section, SectionTitle, Preview, InstructorWrapper, Instructor, Bio } from './styles';

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
                        <a sx={{ variant: 'buttons.highlight-outline' }} title="See Her story">See Her story</a>
                    </Link>
                </InstructorWrapper>
                <Bio>
                    {bio}
                </Bio>
            </Preview>
        </Section>
    )
}

export default InstructorPreview;