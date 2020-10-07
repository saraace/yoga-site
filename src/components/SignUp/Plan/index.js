import React from 'react';
import PropTypes from 'prop-types';
import PlanWrapper, { PlanFlex, PlanTitle, PlanSelect, PlanPrice } from "./styles";
import Radio from "../../Forms/Radio";

const Plan = ({ name, title, price, value, features }) => {
    return (
        <PlanWrapper>
            <PlanFlex>
                <PlanTitle>{title}</PlanTitle>
                <PlanSelect>
                    <PlanPrice>{price}</PlanPrice>
                    <div>
                        <Radio {...{name}} {...{value}} />
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

export default Plan;