import React from "react";
import {NavLink} from "react-router-dom";
let PagesNavBar = ()=>{
    return (
        <React.Fragment>
            <section className="bg-dark mb-3 p-3">
                <div className="d-flex flex-row align-items-center justify-content-evenly">
                    <NavLink to="/pages">
                        <h5 className="text-white">Page One</h5>
                    </NavLink>
                    <NavLink to="/pages/two">
                        <h5 className="text-white">Page Two</h5>
                    </NavLink>
                    <NavLink to="/pages/three">
                        <h5 className="text-white">Page Three</h5>
                    </NavLink>
                    <NavLink to="/pages/four">
                        <h5 className="text-white">Page Four</h5>
                    </NavLink>
                </div>
            </section>
        </React.Fragment>
    )
}

export default  PagesNavBar;