import { cloneElement, useRef, useEffect, useState } from "react";
/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { Section, TitleRow, SectionTitle, SectionSubTitle, Slider, SliderContents, PrevControl, NextControl } from "./styles";
import ChevronLeft from "../../../assets/svgs/chevron-left.svg";
import ChevronRight from "../../../assets/svgs/chevron-right.svg";

const SlidingLayout = ({ title, subTitle, height, stepWidth, dashedBorder, children, ...rest }) => {

    // Pagination animation
    const [ animate, setAnimate ] = useState({ x: 0 });
    const [ steps, setSteps ] = useState(0);
    const numberOfChildren = children.length;

    // Drag constraint
    const [leftConstraint, setLeftConstraint] = useState(0);

    // Refs used to calculate left drag constraint
    const sectionContainer = useRef(null);
    const slidingContainer = useRef(null);

    useEffect(() => {
        setLeftConstraint((slidingContainer.current.offsetWidth - sectionContainer.current.offsetWidth) * -1);
    }, [sectionContainer.current, slidingContainer.current]);

    const prev = () => {
        setSteps(steps => steps-1);
        setAnimate(animate => ({
            x: animate.x + stepWidth
        }));   
    }

    const next = () => {
        setSteps(steps => steps+1);
        setAnimate(animate => ({
            x: animate.x - stepWidth
        }));
    }

    return(
        <Section {...rest} >
            <TitleRow>
                {title && <SectionTitle>{title}</SectionTitle>}
                {subTitle && <SectionSubTitle>{subTitle}</SectionSubTitle>}
            </TitleRow>
            <Slider ref={sectionContainer} sx={{ height: height }}>
                <AnimatePresence>
                    {0 < steps && (
                        <PrevControl 
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div onClick={prev}>
                                <ChevronLeft />
                            </div>
                        </PrevControl>
                    )}
                </AnimatePresence>
                <SliderContents 
                    ref={slidingContainer}
                    drag="x"
                    dragConstraints={{ right: 0, left: leftConstraint }}
                    transition={{ ease: 'easeOut', duration: 0.3 }}
                    {...{animate}}
                    className={dashedBorder? 'dashed' : ''}
                    >
                    {children.map((child, idx) => {
                        return cloneElement(child, {
                            initial: { opacity: 0, left: '100px' },
                            animate: { opacity: 1, left: 0 },
                            transition: { ease: 'easeOut', delay: 0.1*idx, duration: 0.3 },
                        })
                    })}
                </SliderContents>
                <AnimatePresence>
                    {numberOfChildren-1 > steps && (
                        <NextControl 
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div onClick={next}>
                                <ChevronRight />
                            </div>
                        </NextControl>
                    )}
                </AnimatePresence>
            </Slider>
        </Section>
    );
}

SlidingLayout.defaultProps = {
    height: [192, null, null, 264],
    stepWidth: 384, 
    dashedBorder: false
}

SlidingLayout.propTypes = {
    title: PropTypes.string, 
    subTitle: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    stepWidth: PropTypes.number, 
    dashedBorder: PropTypes.bool,
    children: PropTypes.node.isRequired
}

export default SlidingLayout;