import React from "react";
import Summary from "../summary/Summary";
import PayPlan from "../payment-plan/PayPlan";


function Bottom() {
    return (
        <div className="bottom">
            <Summary />
            <PayPlan />
            
              Proceed to Payment Cancel
            Order</div>
    );
}

export default Bottom;