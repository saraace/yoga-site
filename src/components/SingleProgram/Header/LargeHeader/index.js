/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link';
import BackButton from '../../../BackButton';
import { Header, Title, Description, Row, Col, Section, SectionTitle } from './styles';
import BoxIcon from '../../../../assets/svgs/box-icon.svg';
import MatIcon from '../../../../assets/svgs/equip-icon.svg';

const LargeHeader = ({ title, description, date, location, signUpLink }) => {
    return(
        <Header>
            <BackButton />
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Link href={signUpLink}>
                <a sx={{ variant: 'buttons.secondary-outline'}} >Sign Up</a>
            </Link>
            <Row>
                <Col>
                    <Section>
                        <SectionTitle><BoxIcon/>Date</SectionTitle>
                        <div>{date}</div>
                    </Section>
                </Col>
                <Col>
                    <Section>
                        <SectionTitle><MatIcon/>Location</SectionTitle>
                        <div>{location}</div>
                    </Section>
                </Col>
            </Row>
        </Header>
    )
}

export default LargeHeader;