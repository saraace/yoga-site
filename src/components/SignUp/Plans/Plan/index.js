import React from 'react';
import PropTypes from 'prop-types';
import { PlanWrapper, Best, Row, Title, Select, Price, FeaturesList, Feature } from "./styles";
import Checkmark from "../../../../assets/svgs/checkmark.svg";
import Radio from "../../../Forms/Radio";

const Plan = ({ name, title, price, best, value, features, selectedPlan, ...rest }) => {
    return (
        <PlanWrapper className={selectedPlan === value? 'selected' : ''}>
            {best && <Best className={"best "+(selectedPlan === value? 'selected' : '')}>Best Value</Best>}
            <Row>
                <Title>{title}</Title>
                <Select>
                    <Price>{price}</Price>
                    <div>
                        <Radio {...rest} {...{name}} {...{value}} checked={selectedPlan === value}/>
                    </div>
                </Select>
            </Row>
            {features.length > 0 && (
                <FeaturesList>
                    {features.map((feature, i) => (
                        <Feature key={i}><Checkmark />{feature}</Feature>
                    ))}
                </FeaturesList>
            )}
        </PlanWrapper>
    )
}

Plan.defaultProps = {
    name: "", 
    title: "", 
    price: "", 
    best: false,
    value: "", 
    features: [], 
    selectedPlan: ""
};

Plan.propTypes = {
    name: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    price: PropTypes.string.isRequired, 
    best: PropTypes.bool,
    value: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string),
    selectedPlan: PropTypes.string
};

export default Plan;