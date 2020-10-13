import PropTypes from "prop-types";
import { cloneElement } from 'react';
import { Section, SectionTitle, MasonryGrid } from "./styles";

const MasonryLayout = ({ title, children, ...rest }) => {
    return(
        <Section {...rest}>
            {title && <SectionTitle>{title}</SectionTitle>}
            <MasonryGrid className={title? '' : 'push-up'}>
                {children.map((child, idx) => {
                    return cloneElement(child, {
                        className: `${child.props.className} card`,
                        initial: { opacity: 0, top: '100px' },
                        animate: { opacity: 1, top: 0 },
                        transition: { ease: 'easeOut', delay: 0.03*idx, duration: 0.3 }
                    })
                })}
            </MasonryGrid>
        </Section>
    );
}

MasonryLayout.propTypes = {
    title: PropTypes.string, 
    children: PropTypes.node.isRequired
}

export default MasonryLayout;