import React from "react";
import Icon from "./Icon";
import Price from "./Price";

function PayPlan() {
    return (
        <div className="pay-plan">
            <div className="right-side">
                <Icon/>
                <Price heading="Annual Plan" price="$59.99/year"/>
            </div>
            <a>Change</a>
        </div>
    );
}

export default PayPlan;