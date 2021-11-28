import React from "react";
import Icon from "./Icon";

function PayPlan() {
    return(<div className="pay-plan">
        <Icon />
        <div className="price-plan">
        <h4>Annual Plan</h4>
        <p> $59.99/year </p>
        </div>
        <a>Change</a>
     </div>);
}



export default PayPlan;