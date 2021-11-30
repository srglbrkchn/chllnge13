import React from "react";
import Header from "./Header";
import Bottom from "./Bottom";
import Attribution from "../Attribution";

function Content() {
    return (
        <div className="content">
            <Header src="../../images/illustration-hero.svg" alt="Dancing girl"/>
            <Bottom />
            <Attribution />
        </div>
    );
}

export default Content;