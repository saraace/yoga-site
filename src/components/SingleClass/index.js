import { useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence } from "framer-motion";
import BackButton from '../BackButton';
import Video from "./Video";
import ReserveButton from "../ReserveSpot/ReserveButton"; 
import SpotSelector from "../ReserveSpot/SpotSelector";
import { ClassTitle, ClassDetails, Row, Col, Section, SectionTitle, SectionContent, Description } from './styles';
import BoxIcon from '../../assets/svgs/box-icon.svg'; 
import EquipIcon from '../../assets/svgs/equip-icon.svg'; 
import MuscleIcon from '../../assets/svgs/muscle-icon.svg';
import InstructorPreview from './InstructorPreview';

const SingleClass = ({ classType, title, difficulty, duration, description, equipment, muscleGroups, instructor, location, reserved, selectedSpot }) => {

    const [ spotSelectorOpen, setSpotSelectorOpen ] = useState(false);

    const onReserve = () => {
        console.log('spot reserved!');
    }

    const onCancel = () => {
        console.log('reservation canceled');
    }

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
            <ReserveButton {...{ reserved, location: selectedSpot }} onClick={() => setSpotSelectorOpen(spotSelectorOpen => (!spotSelectorOpen))} />
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
            <AnimatePresence>
                {spotSelectorOpen && 
                    <SpotSelector 
                        {...{ 
                            classType, 
                            location, 
                            instructor, 
                            difficulty,
                            duration, 
                            reserved,
                            selectedSpot,
                            onReserve, 
                            onCancel
                        }} 
                        onToggle={() => setSpotSelectorOpen(spotSelectorOpen => (!spotSelectorOpen))}
                    />
                }
            </AnimatePresence>
        </>
    )
};

SingleClass.defaultProps = {
    reserved: false,
    selectedSpot: ""
};

SingleClass.propTypes = {
    classType: PropTypes.string.isRequired,
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
    }).isRequired, 
    location: PropTypes.shape({
        title: PropTypes.string, 
        link: PropTypes.string
    }),
    reserved: PropTypes.bool.isRequired, 
    selectedSpot: PropTypes.string.isRequired
};

export default SingleClass;