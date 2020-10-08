import React from 'react';
import PropTypes from 'prop-types';
import PlanWrapper, { PlanFlex, PlanTitle, PlanSelect, PlanPrice } from "./styles";
import Radio from "../../../Forms/Radio";

const Plan = ({ name, title, price, value, features, selectedPlan, ...rest }) => {
    return (
        <PlanWrapper>
            <PlanFlex>
                <PlanTitle>{title}</PlanTitle>
                <PlanSelect>
                    <PlanPrice>{price}</PlanPrice>
                    <div>
                        <Radio {...rest} {...{name}} {...{value}} checked={value === selectedPlan}/>
                    </div>
                </PlanSelect>
            </PlanFlex>
            <div>
                {features && (
                <ul>
                    {features.map(feature => (
                        <li>{feature}</li>
                    ))}
                </ul>
                )}
            </div>
        </PlanWrapper>
    )
}

Plan.defaultProps = {
    name: "", 
    title: "", 
    price: "", 
    value: "", 
    features: [], 
    selectedPlan: ""
};

Plan.propTypes = {
    name: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    price: PropTypes.string.isRequired, 
    value: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string),
    selectedPlan: PropTypes.string
};

export default Plan;