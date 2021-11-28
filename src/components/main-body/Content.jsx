import React from "react";
import Header from "./Header";
import Bottom from "./Bottom";

function Content() {
    return (
        <div className="content">
            <Header src="../../images/illustration-hero.svg" alt="Dancing girl"/>
            <Bottom />
        </div>
    );
}

export default Content;