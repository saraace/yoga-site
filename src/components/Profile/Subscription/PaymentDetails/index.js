import PropTypes from "prop-types";
import { Button } from 'theme-ui';
import { TitleRow, Payment, CardNumber, ExpDate, Card } from './styles';

const PaymentDetails = ({ cardNumber, expDate }) => {
    return(
        <>
            <TitleRow>
                <h3>Payment Details</h3>
                <Button variant="link">Update</Button>
            </TitleRow>
            <Payment>
                <div>
                    <CardNumber>{cardNumber}</CardNumber>
                    <ExpDate>{expDate}</ExpDate>
                </div>
                <Card>VISA</Card>
            </Payment>
        </>
    )
}

PaymentDetails.propTypes = {
    cardNumber: PropTypes.string, 
    expDate: PropTypes.string
}

export default PaymentDetails;