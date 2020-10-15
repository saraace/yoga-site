import { Video, ClassTitle, ClassDetails, Row, Col, Section, SectionTitle, SectionContent, Description } from './styles';
import BoxIcon from '../../assets/svgs/box-icon.svg'; 
import EquipIcon from '../../assets/svgs/equip-icon.svg'; 
import MuscleIcon from '../../assets/svgs/muscle-icon.svg';

const SingleClass = ({ title, instructor, difficulty, duration, description, equipment, muscleGroups }) => {
    return(
        <>
            <Video />
            <ClassTitle>{title}</ClassTitle>
            <ClassDetails>
                <span>{instructor}</span>
                <span>{difficulty}</span>
                <span>{duration}</span>
            </ClassDetails>
            <Row>
                <Col>
                    <Section>
                        <SectionTitle><BoxIcon/>Description</SectionTitle>
                        <Description>{description}</Description>
                    </Section>
                </Col>
                <Col>
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
                </Col>
            </Row>
        </>
    )
}

export default SingleClass;