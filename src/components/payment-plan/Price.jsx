import React from "react";

function Price(props) {
    return (
        <div className="price-plan">
            <h4>{props.heading}</h4>
            <p>{props.price}
            </p>
        </div>
    );
}

export default Price;