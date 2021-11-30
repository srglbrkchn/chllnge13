import React from "react";
import Summary from "../summary/Summary";
import PayPlan from "../payment-plan/PayPlan";
import BlueBtn from "../BlueBtn";
import Cancel from "../Cancel";

function Bottom() {
    return (
        <div action="post" className="bottom">
            <Summary/>
            <PayPlan/>
            <BlueBtn text="Proceed to Payment" />
            <Cancel text="Cancel Order" />
        </div>
    );
}

export default Bottom;