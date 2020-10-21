import { cloneElement, useRef, useEffect, useState } from "react";
/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types';
import { Section, SectionTitle, Slider, SliderContents, NextControl } from "./styles";
import ChevronRight from "../../../assets/svgs/chevron-right.svg";

const SlidingLayout = ({ title, height, cardWidth, children, ...rest }) => {

    const [ animate, setAnimate ] = useState({});

    const [leftConstraint, setLeftConstraint] = useState(0);
    
    const sectionContainer = useRef(null);
    const slidingContainer = useRef(null);

    useEffect(() => {
        setLeftConstraint((slidingContainer.current.offsetWidth - sectionContainer.current.offsetWidth) * -1);
    }, [sectionContainer.current, slidingContainer.current]);

    useEffect(() => {
        console.log(animate);
    }, [animate]);

    const prev = () => {
    }

    const next = () => {
        setAnimate({
            x: '-512px'
        })    
    }

    return(
        <Section {...rest} >
            {title && <SectionTitle>{title}</SectionTitle>}
            <Slider ref={sectionContainer} sx={{ height: height }}>
                <SliderContents 
                    ref={slidingContainer}
                    drag="x"
                    dragConstraints={{ right: 0, left: leftConstraint }}
                    {...{animate}}
                    >
                    {children.map((child, idx) => {
                        return cloneElement(child, {
                            initial: { opacity: 0, left: '100px' },
                            animate: { opacity: 1, left: 0 },
                            transition: { ease: 'easeOut', delay: 0.1*idx, duration: 0.3 }
                        })
                    })}
                </SliderContents>
                <NextControl onClick={next}>
                    <ChevronRight />
                </NextControl>
            </Slider>
        </Section>
    );
}

SlidingLayout.defaultProps = {
    height: [192, null, null, 264]
}

SlidingLayout.propTypes = {
    title: PropTypes.string, 
    height: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    children: PropTypes.node.isRequired
}

export default SlidingLayout;