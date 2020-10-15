import { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { Filter, DragContainer, DragHandle, Labels, Label } from './styles';

const DurationFilter = ({ durationMin, durationMax, handleChange }) => {

    // Min and Max Positions for the drag handles
    const [ maxPos, setMaxPos ] = useState(234.75);
    const [ minPos, setMinPos ] = useState(70.5);

    // Min and Max values
    const [ min, setMin ] = useState(durationMin); 
    const [ max, setMax ] = useState(durationMax);

    useEffect(() => {
        if(min > 0){
            handleChange('durationMin', min);
        }
    }, [min]);

    useEffect(() => {
        if(max < 40){
            handleChange('durationMax', max);
        }
    }, [max]);

    return(
        <Filter>
            <DragContainer>
                <DragHandle
                    className="left"
                    drag="x"
                    dragElastic={0}
                    whileTap={{ scale: 0.9 }}
                    initial={{
                        x: durationMin > 0? ((durationMin/10)*82.25)-12 : durationMin
                    }}
                    dragConstraints={{
                        left: 0, 
                        right: maxPos
                    }}
                    dragTransition={{
                        power: 0,
                        timeConstant: 100,
                        modifyTarget: (target) => {
                            const step = Math.round((target+12)/82.25);
                            const newPos = (step*82.25)-12; 
                            setMinPos(newPos+82.25);
                            setMin(step*10);
                            return newPos;
                        }
                    }}
                ></DragHandle>
                <DragHandle
                    drag="x"
                    dragElastic={0}
                    whileTap={{ scale: 0.9 }}
                    initial={{
                        x: durationMax < 40? ((durationMax/10)*82.25)-12 : 305
                    }}
                    dragConstraints={{
                        left: minPos, 
                        right: 305
                    }}
                    dragTransition={{
                        power: 0,
                        timeConstant: 100,
                        modifyTarget: (target) => {
                            const step = Math.round((target+12)/82.25);
                            const newPos = (step*82.25)-12;
                            setMaxPos(newPos-82.25);
                            setMax(step*10);
                            //setMaxPos(newPos >=305? newPos-36 : newPos-24);
                            return newPos;
                        }
                    }}
                ></DragHandle>
            </DragContainer>
            <Labels>
                <Label className="first">0</Label>
                <Label className="mid1">10</Label>
                <Label>20</Label>
                <Label className="mid2">30</Label>
                <Label className="last">40+</Label>
            </Labels>
        </Filter>
    )
}

DurationFilter.defaultProps = {
    durationMin: 0, 
    durationMax: 40,
    handleChange: () => {}
}

DurationFilter.propTypes = {
    durationMin: PropTypes.number, 
    durationMax: PropTypes.number,
    handleChange: PropTypes.func
}

export default DurationFilter;