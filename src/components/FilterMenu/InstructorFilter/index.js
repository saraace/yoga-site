import { useState, useRef, useEffect } from 'react';
import PropTypes from "prop-types";
import { AnimatePresence, motion } from 'framer-motion';
import { Filter, LeftControl, RightControl, SliderWrap, Slider, Instructor, Image, SelectedIndicator, Overlay } from './styles'; 
import Checkmark from '../../../assets/svgs/checkmark-2.svg';

const InstructorFilter = ({ instructors, name, selected, handleChange }) => {

    // Pagination controls
    const [page, setPage] = useState(1);
    const maxPage = Math.ceil(instructors.length / 4);

    // Drag Controls
    const [leftConstraint, setLeftConstraint] = useState(0);
    
    const sectionContainer = useRef(null);
    const slidingContainer = useRef(null);

    useEffect(() => {
        setLeftConstraint((slidingContainer.current.offsetWidth - sectionContainer.current.offsetWidth - 26) * -1);
    }, [sectionContainer.current, slidingContainer.current]);

    const onPrevClick = () => {
        setPage(page => page-1);
    }

    const onNextClick = () => {
        setPage(page => page+1);
    }

    return(
        <Filter>
            <AnimatePresence>
                {page > 1 && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3}}
                    >
                        <LeftControl onClick={onPrevClick} />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {page < maxPage && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3}}
                    >
                        <RightControl onClick={onNextClick} />
                    </motion.div>
                )}
            </AnimatePresence>
            <SliderWrap ref={sectionContainer} >
                <Slider
                    initial={{ x: 0 }}
                    animate={{ x: -828*(page-1) }}
                    transition={{ ease: 'easeOut', duration: 0.3 }}
                    ref={slidingContainer}
                    drag="x"
                    dragElastic={0}
                    dragConstraints={{
                        right: 26, 
                        left: leftConstraint
                    }}
                >
                {instructors.map((instructor, i) => {
                    return(
                        <Instructor key={i} className={selected === instructor.value? 'selected' : ''}>
                            <Image src={instructor.image} alt={instructor.label} />
                            <Overlay>
                                <SelectedIndicator className={selected === instructor.value? 'selected' : ''}>
                                    <Checkmark />
                                </SelectedIndicator>
                                <div>
                                    <span>{instructor.label}</span>
                                    <input type="radio" {...{name}} onChange={() => {handleChange(name, instructor.value)}} />
                                </div>
                            </Overlay>
                        </Instructor>
                    )
                })}
                </Slider>
            </SliderWrap>
        </Filter>
    )
}

InstructorFilter.defaultProps = {
    instructors: [], 
    name: 'instructor', 
    selected: '', 
    handleChange: () => {}
}

InstructorFilter.propTypes = {
    instructors: PropTypes.arrayOf(PropTypes.object).isRequired, 
    name: PropTypes.string, 
    selected: PropTypes.string, 
    handleChange: PropTypes.func
}

export default InstructorFilter;