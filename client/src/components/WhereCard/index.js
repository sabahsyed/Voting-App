import React from "react";
import "./style.css";

function WhereCard(props) {
    return (
        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin dash-card uk-text-center" uk-grid="true">
            <div className="uk-card-media-left uk-cover-container">
                <img src="images/light.jpg" alt="" uk-cover="true" />
                <canvas width="600" height="400"></canvas>
            </div>
            <div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title dash-card-title">WHERE</h3>
                    <hr className="dash-hr" />
                    <p className="dash-card-subtitle">Important Places to Remember.</p>
                </div>
            </div>
        </div>
    )
};

export default WhereCard;