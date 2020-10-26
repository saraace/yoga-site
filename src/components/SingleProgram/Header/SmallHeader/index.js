import { Header, Title, Description, Col, Section, SectionTitle } from './styles';
import BoxIcon from '../../../../assets/svgs/box-icon.svg';
import MatIcon from '../../../../assets/svgs/equip-icon.svg';

const SmallHeader = ({ title, description, date, location }) => {
    return(
        <Header>
            <Col>
                <Title>{title}</Title>
                <Description>{description}</Description>                
            </Col>
            <div>
                <Section>
                    <SectionTitle><BoxIcon/>Date</SectionTitle>
                    <div>{date}</div>
                </Section>
                <Section>
                    <SectionTitle><MatIcon/>Location</SectionTitle>
                    <div>{location}</div>
                </Section>
            </div>
        </Header>
    )
}

export default SmallHeader;