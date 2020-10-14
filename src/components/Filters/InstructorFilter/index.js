import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Filter, LeftControl, RightControl, SliderWrap, Slider, Instructor, Image, SelectedIndicator, Overlay } from './styles'; 
import Checkmark from '../../../assets/svgs/checkmark-2.svg';

const InstructorFilter = ({ instructors, name, selected, handleChange }) => {

    const [page, setPage] = useState(1);
    const maxPage = Math.ceil(instructors.length / 4);

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
            <SliderWrap>
                <Slider
                    initial={{ x: 0 }}
                    animate={{ x: -828*(page-1) }}
                    transition={{ ease: 'easeOut', duration: 0.3 }}
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

export default InstructorFilter;