import { Container } from 'theme-ui';
import { Section, SectionTitle, Slider } from "./styles";
//import ChevronRight from "../../svgs/chevron-right.svg";

const SlidingSection = ({ title, children }) => {
    return(
        <Section>
            <Container>
                <SectionTitle>{title}</SectionTitle>
            </Container>
            <Slider>{children}</Slider>
        </Section>
    );
}

export default SlidingSection;