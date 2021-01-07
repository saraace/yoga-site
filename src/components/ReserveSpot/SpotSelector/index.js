import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Container } from "theme-ui";
import Spot from "./Spot";
import { Lightbox, ClassroomLayout, Row } from "./styles"; 

const SpotSelector = ({ classType, location, instructor, difficulty, duration, }) => {

    const layout = [
        {
            spots: [
                { label: "A1", available: true, selected: false }, 
                { label: "A2", available: true, selected: false }, 
                { label: "A3", available: true, selected: false }, 
                { label: "A4", available: true, selected: false }, 
                { label: "A5", available: true, selected: false }, 
                { label: "A6", available: true, selected: false }, 
                { label: "A7", available: true, selected: false }, 
                { label: "A8", available: true, selected: false }, 
                { label: "A9", available: true, selected: false }, 
                { label: "A10", available: true, selected: false }, 
                { label: "A11", available: true, selected: false }, 
                { label: "A12", available: true, selected: false }, 
            ]
        }, 
        {
            spots: [
                { label: "B1", available: false, selected: false }, 
                { label: "B2", available: false, selected: false }, 
                { label: "B3", available: true, selected: false }, 
                { label: "B4", available: true, selected: false }, 
                { label: "B5", available: true, selected: false }, 
                { label: "B6", available: true, selected: false }, 
                { label: "B7", available: true, selected: false }, 
                { label: "B8", available: false, selected: false }, 
                { label: "B9", available: true, selected: false }, 
                { label: "B10", available: true, selected: false }, 
                { label: "B11", available: true, selected: false }, 
                { label: "B12", available: true, selected: false }, 
            ]
        }, 
        {
            spots: [
                { label: "C1", available: true, selected: false }, 
                { label: "C2", available: true, selected: false }, 
                { label: "C3", available: true, selected: false }, 
                { label: "C4", available: true, selected: false }, 
                { label: "C5", available: true, selected: false }, 
                { label: "C6", available: true, selected: false }, 
                { label: "C7", available: true, selected: false }, 
                { label: "C8", available: true, selected: false }, 
                { label: "C9", available: true, selected: false }, 
                { label: "C10", available: true, selected: false }, 
                { label: "C11", available: true, selected: false }, 
                { label: "C12", available: true, selected: false }, 
            ]
        }
    ];

    const reserve = () => {
        console.log('Reserve!');
    }

    const reserveSchema = Yup.object().shape({
        spot: Yup.mixed().required("Required field")
    });

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            spot: ""
        },
        validationSchema: reserveSchema,
        onSubmit: reserve
    })

    return(
        <Lightbox>
            <Container>
                <ClassroomLayout onSubmit={handleSubmit}>
                    {layout.map((row, i) => {
                        return(
                            <Row key={i}>
                                {row.spots.map((spot, j) => {
                                    return(
                                        <div key={j} >
                                            <div>{values.spot}</div>
                                            <Spot {...spot} name="spot" onChange={handleChange} validate={touched.spot && errors.spot} />
                                        </div>
                                    )
                                })}
                            </Row>
                        )
                    })}
                    <Button type="submit" variant='primary-block'>Reserve</Button>
                </ClassroomLayout>
            </Container>
        </Lightbox>
    )
}

export default SpotSelector;