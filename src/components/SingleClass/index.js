import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BackButton from '../BackButton';
import ReserveButton from "../ReserveSpot/ReserveButton"; 
import SpotSelector from "../ReserveSpot/SpotSelector";
import { Video, ClassTitle, ClassDetails, Row, Col, Section, SectionTitle, SectionContent, Description } from './styles';
import BoxIcon from '../../assets/svgs/box-icon.svg'; 
import EquipIcon from '../../assets/svgs/equip-icon.svg'; 
import MuscleIcon from '../../assets/svgs/muscle-icon.svg';
import InstructorPreview from './InstructorPreview';

const SingleClass = ({ title, difficulty, duration, description, equipment, muscleGroups, instructor, reserved }) => {

    const [ spotSelectorOpen, setSpotSelectorOpen ] = useState(false);
    
    useEffect(() => {
        console.log(spotSelectorOpen);
        
    }, [spotSelectorOpen])

    return(
        <>
            <BackButton />
            <Video />
            <ClassTitle>{title}</ClassTitle>
            <ClassDetails>
                <span>{instructor.name}</span>
                <span>{difficulty}</span>
                <span>{duration}</span>
            </ClassDetails>
            <ReserveButton {...{ reserved }} onClick={() => setSpotSelectorOpen(spotSelectorOpen => (!spotSelectorOpen))} />
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
            <InstructorPreview {...instructor} />
            {spotSelectorOpen && <SpotSelector />}
        </>
    )
}

SingleClass.propTypes = {
    title: PropTypes.string.isRequired, 
    difficulty: PropTypes.string, 
    duration: PropTypes.string, 
    description: PropTypes.string.isRequired, 
    equipment: PropTypes.arrayOf(PropTypes.string),
    muscleGroups: PropTypes.arrayOf(PropTypes.string),
    instructor: PropTypes.shape({
        name: PropTypes.string, 
        bio: PropTypes.string, 
        link: PropTypes.string, 
        image: PropTypes.string
    }).isRequired
}

export default SingleClass;