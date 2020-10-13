import { cloneElement } from 'react';
import { Section, SectionTitle, Grid } from "./styles";

const GridLayout = ({ title, children, ...rest}) => {
    return(
        <Section {...rest}>
            {title && <SectionTitle>{title}</SectionTitle>}
            <Grid>
                {children.map((child, idx) => {
                    return cloneElement(child, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { ease: 'easeOut', delay: 0.05*idx, duration: 0.3 }
                    })
                })}
            </Grid>
        </Section>
    )
}

export default GridLayout;