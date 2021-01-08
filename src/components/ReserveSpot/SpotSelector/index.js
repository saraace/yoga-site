import { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link"
import { AnimatePresence } from "framer-motion";
import { Container } from "theme-ui";
import { useFormik } from "formik";
import * as Yup from "yup";
import ClassTypeBadge from "../../ClassTypeBadge";
import ValidationLabel from "../../Forms/Validation/ValidationLabel";
import ValidationWrapper from "../../Forms/Validation/ValidationWrapper";
import Spot from "./Spot";
import LocationPin from "../../../assets/svgs/location-pin.svg";
import CancelConfirmation from "../CancelConfirmation";
import { Lightbox, LightboxControls, CloseButton, ResetButton, ClassroomLayout, Row, SubmitButton, CancelButton, ClassInfo, Location, ClassDetails, Title } from "./styles"; 

const SpotSelector = ({ classType, location, instructor, difficulty, duration, reserved, selectedSpot, onToggle, onReserve, onCancel }) => {

    const [ cancelConfirm, setCancelConfirm ] = useState(false);

    const layout = [
        {
            spots: [
                { label: "A1", available: true }, 
                { label: "A2", available: true }, 
                { label: "A3", available: true }, 
                { label: "A4", available: true }, 
                { label: "A5", available: true }, 
                { label: "A6", available: true }, 
                { label: "A7", available: true }, 
                { label: "A8", available: true }, 
                { label: "A9", available: true }, 
                { label: "A10", available: true }, 
                { label: "A11", available: true }, 
                { label: "A12", available: true }, 
            ]
        }, 
        {
            spots: [
                { label: "B1", available: false }, 
                { label: "B2", available: false }, 
                { label: "B3", available: true }, 
                { label: "B4", available: true }, 
                { label: "B5", available: true }, 
                { label: "B6", available: true }, 
                { label: "B7", available: true }, 
                { label: "B8", available: false }, 
                { label: "B9", available: true }, 
                { label: "B10", available: true }, 
                { label: "B11", available: true }, 
                { label: "B12", available: true }, 
            ]
        }, 
        {
            spots: [
                { label: "C1", available: true }, 
                { label: "C2", available: true }, 
                { label: "C3", available: true }, 
                { label: "C4", available: true }, 
                { label: "C5", available: true }, 
                { label: "C6", available: true }, 
                { label: "C7", available: true }, 
                { label: "C8", available: true }, 
                { label: "C9", available: true }, 
                { label: "C10", available: true }, 
                { label: "C11", available: true }, 
                { label: "C12", available: true }, 
            ]
        }
    ];

    const reserveSchema = Yup.object().shape({
        spot: Yup.mixed().required("Select Mat Location")
    });

    const { values, errors, touched, handleChange, handleSubmit, handleReset } = useFormik({
        initialValues: {
            spot: selectedSpot
        },
        validationSchema: reserveSchema,
        onSubmit: onReserve
    })

    return(
        <>
            <Lightbox 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <LightboxControls>
                    <CloseButton onClick={onToggle}>Close</CloseButton>
                    <ResetButton onClick={handleReset}>Reset</ResetButton>
                </LightboxControls>
                <Container>
                    <ClassInfo>
                        <ClassTypeBadge type={classType} />
                        <Link href={location.link}>
                            <Location><LocationPin />{location.title}</Location>
                        </Link>
                        <ClassDetails>
                            <span>{instructor.name}</span>
                            <span>{difficulty}</span>
                            <span>{duration}</span>
                        </ClassDetails>
                    </ClassInfo>
                    <Title>Select Mat Location</Title>
                    <ClassroomLayout onSubmit={handleSubmit}>
                        <ValidationWrapper validate={touched.spot && errors.spot}>
                            {layout.map((row, i) => {
                                return(
                                    <Row key={i}>
                                        {row.spots.map((spot, j) => {
                                            return(
                                                <div key={j} >
                                                    <Spot {...spot} name="spot" onChange={handleChange} value={values.spot} />
                                                </div>
                                            )
                                        })}
                                    </Row>
                                )
                            })}
                        </ValidationWrapper>
                        <AnimatePresence>
                            {(touched.spot && errors.spot) && <ValidationLabel>{errors.spot}</ValidationLabel>}
                        </AnimatePresence>
                        {!reserved && <SubmitButton type="submit" variant='primary-block'>Reserve</SubmitButton>}
                        {reserved && <CancelButton type="button" onClick={() => setCancelConfirm(true)} variant="secondary-outline-block">Cancel Reservation</CancelButton>}
                    </ClassroomLayout>
                </Container>
            </Lightbox>
            {cancelConfirm && <CancelConfirmation {...{ onCancel }} onClose={() => setCancelConfirm(false)} />}
        </>
    )
};

SpotSelector.defaultProps = {
    classType: "yoga", 
    reserved: false,
    selectedSpot: ""
}

SpotSelector.propTypes = {
    classType: PropTypes.oneOf(["yoga", "follow", "flow", "fiit", "restore"]).isRequired,
    location: PropTypes.shape({
        title: PropTypes.string, 
        link: PropTypes.string
    }),
    instructor: PropTypes.shape({
        name: PropTypes.string, 
        bio: PropTypes.string, 
        link: PropTypes.string, 
        image: PropTypes.string
    }).isRequired, 
    difficulty: PropTypes.string.isRequired, 
    reserved: PropTypes.bool.isRequired,
    selectedSpot: PropTypes.string.isRequired, 
    onToggle: PropTypes.func, 
    onReserve: PropTypes.func.isRequired, 
    onCancel: PropTypes.func.isRequired
}

export default SpotSelector;