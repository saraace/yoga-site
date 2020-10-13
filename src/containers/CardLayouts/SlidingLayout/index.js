import { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { useRef, useEffect, useState } from "react";
import { Section, SectionTitle, Slider, SliderContents } from "./styles";
//import ChevronRight from "../../svgs/chevron-right.svg";

const SlidingSection = ({ title, children, ...rest }) => {

    const [leftConstraint, setLeftConstraint] = useState(0);
    const [sliderHeight, setSliderHeight] = useState(0);
    
    const sectionContainer = useRef(null);
    const slidingContainer = useRef(null);

    useEffect(() => {
        setLeftConstraint((slidingContainer.current.offsetWidth - sectionContainer.current.offsetWidth) * -1);
        setSliderHeight(slidingContainer.current.offsetHeight);
    }, [sectionContainer.current, slidingContainer.current]);

    return(
        <Section {...rest} >
            {title && <SectionTitle>{title}</SectionTitle>}
            <Slider ref={sectionContainer} style={{height: sliderHeight}}>
                <SliderContents 
                    ref={slidingContainer}
                    drag="x"
                    dragConstraints={{ right: 0, left: leftConstraint }}>
                    {children.map((child, idx) => {
                        return cloneElement(child, {
                            initial: { opacity: 0, left: '100px' },
                            animate: { opacity: 1, left: 0 },
                            transition: { ease: 'easeOut', delay: 0.03*idx, duration: 0.3 }
                        })
                    })}
                </SliderContents>
            </Slider>
        </Section>
    );
}

SlidingSection.propTypes = {
    title: PropTypes.string
}

export default SlidingSection;