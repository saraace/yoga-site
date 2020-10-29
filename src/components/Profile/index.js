import { ProfileBox, Row, Col } from './styles';
import MyAccount from './MyAccount';
import Subscription from './Subscription';
import Statistics from './Statistics'; 
import Achievements from './Achievements';

const Profile = ({ plan, paymentDetails, stats, achievements }) => {
    return(
        <ProfileBox>
            <Row>
                <Col><MyAccount /></Col>
                <Col><Subscription {...{ plan, paymentDetails }} /></Col>
            </Row>
            <Row>
                <Col><Statistics {...{ stats}} /></Col>
                <Col><Achievements {...{achievements}} /></Col>
            </Row>
        </ProfileBox>
    )
}

export default Profile;
