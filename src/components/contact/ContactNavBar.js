import React from "react";
import {NavLink} from "react-router-dom";
let ContactNavBar = ()=>{
    return (
        <React.Fragment>
            <section className="bg-dark mb-3 p-3">
                <div className="d-flex flex-row align-items-center justify-content-evenly">
                    <NavLink to="/contact">
                        <h5 className="text-white">Contact</h5>
                    </NavLink>
                    <NavLink to="/contact/query">
                        <h5 className="text-white">Query</h5>
                    </NavLink>
                    <NavLink to="/contact/faq">
                        <h5 className="text-white">FAQ</h5>
                    </NavLink>
                    <NavLink to="/contact/maps">
                        <h5 className="text-white">Address</h5>
                    </NavLink>
                </div>
            </section>
        </React.Fragment>
    )
}

export default  ContactNavBar;