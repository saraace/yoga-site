import PropTypes from "prop-types";
import { Button } from 'theme-ui';
import { Preview, Image, Wrapper, Info, Title, ClassDetails, Section, SectionTitle, SectionContent } from './styles';
import BoxIcon from '../../../assets/svgs/box-icon.svg'; 
import EquipIcon from '../../../assets/svgs/equip-icon.svg'; 
import MuscleIcon from '../../../assets/svgs/muscle-icon.svg';
import InstructorPreview from '../../SingleClass/InstructorPreview';

const ClassPreview = ({ title, description, difficulty, time, image, equipment, muscleGroups, instructor, location }) => {
    return(
        <Preview>
            <Image src={image} title="title" />
            <Wrapper>
                <Info>
                    <div>
                        <Title>{title}</Title>
                        <ClassDetails>
                            <span>{instructor.name}</span>
                            <span>{difficulty}</span>
                            <span>{time}</span>
                        </ClassDetails>
                        <div>
                            <Button variant="primary">Join Waitlist</Button>
                        </div>
                    </div>
                    <div>
                        <Section>
                            <SectionTitle><BoxIcon/>Description</SectionTitle>
                            <SectionContent>{description}</SectionContent>
                        </Section>
                        <Section>
                            <SectionTitle><EquipIcon/>Equipment</SectionTitle>
                            <SectionContent>
                                {equipment.map((equip, i) => {
                                    return equip+(i+1 < equipment.length? ', ' : '');
                                })}
                            </SectionContent>
                        </Section>
                        <Section>
                            <SectionTitle><MuscleIcon/>Muscle Groups</SectionTitle>
                            <SectionContent>
                                {muscleGroups.map((muscle, i) => {
                                    return muscle+(i+1 < muscleGroups.length? ', ' : '');
                                })}
                            </SectionContent>
                        </Section>
                    </div>
                </Info>
                <InstructorPreview {...instructor} />
                <div>
                    <h3>Location</h3>
                </div>
            </Wrapper>
        </Preview>
    )
}


export default ClassPreview;