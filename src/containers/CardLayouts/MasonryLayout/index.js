import { Section, SectionTitle, MasonryGrid } from "./styles";

const MasonrySection = ({ title, children, ...rest }) => {
    return(
        <Section {...rest}>
            {title && <SectionTitle>{title}</SectionTitle>}
            <MasonryGrid className={title? '' : 'push-up'}>
                {children}
            </MasonryGrid>
        </Section>
    );
}

export default MasonrySection;