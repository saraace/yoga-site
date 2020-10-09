import PropTypes from 'prop-types';
import { useRef, useEffect, useState } from "react";
import { Section, SectionTitle, Slider, SliderContents } from "./styles";
//import ChevronRight from "../../svgs/chevron-right.svg";

const SlidingSection = ({ title, height, children }) => {

    const [leftConstraint, setLeftConstraint] = useState(0);
    
    const sectionContainer = useRef(null);
    const slidingContainer = useRef(null);

    useEffect(() => {
        setLeftConstraint((slidingContainer.current.offsetWidth - sectionContainer.current.offsetWidth) * -1);
    }, [sectionContainer.current, slidingContainer.current]);

    return(
        <Section>
            {title && <SectionTitle>{title}</SectionTitle>}
            <Slider ref={sectionContainer} style={{ height: height }}>
                <SliderContents 
                    ref={slidingContainer}
                    drag="x"
                    dragConstraints={{ right: 0, left: leftConstraint }}>
                    {children}
                </SliderContents>
            </Slider>
        </Section>
    );
}

SlidingSection.defaultProps = {
    height: "300px"
}

SlidingSection.propTypes = {
    title: PropTypes.string, 
    height: PropTypes.string.isRequired
}

export default SlidingSection;