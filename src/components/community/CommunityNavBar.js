import React from "react";
import {NavLink} from "react-router-dom";
let CommunityNavBar = ()=>{
    return (
        <React.Fragment>
            <section className="bg-dark mb-3 p-3">
                <div className="d-flex flex-row align-items-center justify-content-evenly">
                    <NavLink to="/community">
                        <h5 className="text-white">Community One</h5>
                    </NavLink>
                    <NavLink to="/community/two">
                        <h5 className="text-white">Community Two</h5>
                    </NavLink>
                    <NavLink to="/community/three">
                        <h5 className="text-white">Community Three</h5>
                    </NavLink>
                    <NavLink to="/community/four">
                        <h5 className="text-white">Community Four</h5>
                    </NavLink>
                </div>
            </section>
        </React.Fragment>
    )
}

export default  CommunityNavBar;