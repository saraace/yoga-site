import PropTypes from "prop-types";
import { TitleRow, Plan, Subscription, Title, FeaturesList, Feature, Notice } from './styles';
import { Button } from 'theme-ui';
import Checkmark from "../../../../assets/svgs/checkmark.svg";

const MyPlan = ({ title, price, features }) => {

    const subsciptionNotice = 'Your next charge wil be September 1, 2020'

    return(
        <>
            <TitleRow>
                <h3>My Plan</h3>
                <Button variant="link">Change</Button>
            </TitleRow>
            <Plan>
                <Subscription>
                    <Title>
                        <div>{title}</div>
                        <div>{price}</div>
                    </Title>
                    <FeaturesList>
                        {features.map((feature, i) => (
                            <Feature key={i}><Checkmark />{feature}</Feature>
                        ))}
                    </FeaturesList>
                </Subscription>
                <Notice>{subsciptionNotice}</Notice>
            </Plan>
        </>
    )
}

MyPlan.defaultProps = {
    features: []
}

MyPlan.propTypes = {
    title: PropTypes.string, 
    price: PropTypes.string, 
    features: PropTypes.arrayOf(PropTypes.string)
}

export default MyPlan;