import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Preview, Image, Wrapper, Info, Title, ClassDetails, ClassInformation, Description, Section, SectionTitle } from './styles';
import BoxIcon from '../../../assets/svgs/box-icon.svg'; 
import EquipIcon from '../../../assets/svgs/equip-icon.svg'; 
import MuscleIcon from '../../../assets/svgs/muscle-icon.svg';
import InstructorPreview from '../../SingleClass/InstructorPreview';
import ReserveButton from "../../ReserveSpot/ReserveButton";
import SpotSelector from "../../ReserveSpot/SpotSelector";

const ClassPreview = ({ title, description, classType, duration, difficulty, time, image, reserved, reservedSpot, equipment, muscleGroups, instructor, location }) => {

    const [ spotSelectorOpen, setSpotSelectorOpen ] = useState(false);

    const onReserve = () => {
        console.log("spot reserved !"); 
    }

    const onCancel = () => {
        console.log("reservation canceled");
    }

    return(
        <>
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
                            <ReserveButton {...{ reserved, location: reservedSpot }} onClick={() => setSpotSelectorOpen(spotSelectorOpen => (!spotSelectorOpen))} />
                        </div>
                    </div>
                    <ClassInformation>
                        <Description>
                            <Section>
                                <SectionTitle><BoxIcon/>Description</SectionTitle>
                                <div dangerouslySetInnerHTML={{ __html: description }}></div>
                            </Section>
                        </Description>
                        <div>
                            <Section>
                                <SectionTitle><EquipIcon/>Equipment</SectionTitle>
                                <div>
                                    {equipment.map((equip, i) => {
                                        return equip+(i+1 < equipment.length? ', ' : '');
                                    })}
                                </div>
                            </Section>
                            <Section>
                                <SectionTitle><MuscleIcon/>Muscle Groups</SectionTitle>
                                <div>
                                    {muscleGroups.map((muscle, i) => {
                                        return muscle+(i+1 < muscleGroups.length? ', ' : '');
                                    })}
                                </div>
                            </Section>
                        </div>
                    </ClassInformation>
                </Info>
                <InstructorPreview {...instructor} />
            </Wrapper>
        </Preview>
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
                        selectedSpot: reservedSpot, 
                        onReserve, 
                        onCancel
                    }}
                    onToggle={() => setSpotSelectorOpen(spotSelectorOpen => !spotSelectorOpen)}
                />
            }
        </AnimatePresence>
        </>
    )
}


export default ClassPreview;