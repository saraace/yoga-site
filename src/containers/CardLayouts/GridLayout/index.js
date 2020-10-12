import { Section, SectionTitle, Grid } from "./styles";

const GridLayout = ({ title, children, ...rest}) => {
    return(
        <Section {...rest}>
            {title && <SectionTitle>{title}</SectionTitle>}
            <Grid>
                {children}
            </Grid>
        </Section>
    )
}

export default GridLayout;