import React from "react";
import {NavLink} from "react-router-dom";
let ActivityNavBar = ()=>{
    return (
        <React.Fragment>
            <section className="bg-dark mb-3 p-3">
                <div className="d-flex  flex-row align-items-center justify-content-evenly">
                    <NavLink to="/activity">
                        <h5 className="text-white">Activity One</h5>
                    </NavLink>
                    <NavLink to="/activity/two">
                        <h5 className="text-white">Activity Two</h5>
                    </NavLink>
                    <NavLink to="/activity/three">
                        <h5 className="text-white">Activity Three</h5>
                    </NavLink>
                    <NavLink to="/activity/four">
                        <h5 className="text-white">Activity Four</h5>
                    </NavLink>
                </div>
            </section>
        </React.Fragment>
    )
}

export default  ActivityNavBar;