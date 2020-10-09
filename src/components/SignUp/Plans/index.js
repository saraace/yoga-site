import PropTypes from 'prop-types';
import PlanGroup from "./styles"
import Plan from "./Plan";
import ValidationLabel from "../../Forms/Validation/ValidationLabel";
import ValidationWrapper from "../../Forms/Validation/ValidationWrapper";

const Plans = ({ plans, name, value, validate, ...rest }) => {
    return(
        <PlanGroup>
            <ValidationWrapper {...{validate}}>
                {plans.map((plan, i) => {
                    return(
                        <Plan key={i} {...rest} selectedPlan={value} {...plan} {...{name}} />
                    )
                })}
            </ValidationWrapper>
            {validate && <ValidationLabel>{validate}</ValidationLabel>}
        </PlanGroup>
    );
}

Plans.defaultProps = {
    plans: [], 
    name: "", 
    value: "", 
    validate: ""
};

Plans.propTypes = {
    plans: PropTypes.arrayOf(PropTypes.object).isRequired, 
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    validate: PropTypes.string
};

export default Plans;