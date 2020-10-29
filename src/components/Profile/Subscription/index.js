import PropTypes from "prop-types";
import MyPlan from './MyPlan';
import PaymentDetails from './PaymentDetails';

const Subscription = ({ plan, paymentDetails }) => {
    return(
        <>
            <MyPlan {...plan} />
            <PaymentDetails {...paymentDetails} />
        </>
    )
}

Subscription.propTypes = {
    plan: PropTypes.shape({
        title: PropTypes.string, 
        price: PropTypes.string, 
        features: PropTypes.arrayOf(PropTypes.string)
    }), 
    paymentDetails: PropTypes.shape({
        cardNumber: PropTypes.string, 
        expDate: PropTypes.string
    })
}

export default Subscription;