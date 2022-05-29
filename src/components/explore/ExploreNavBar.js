import React from "react";
import {NavLink} from "react-router-dom";
let ExploreNavBar = ()=>{
    return (
        <React.Fragment>
            <section className="bg-dark mb-3 p-3">
                <div className="d-flex flex-row align-items-center justify-content-evenly">
                    <NavLink to="/explore/">
                        <h5 className="text-white">Accessories</h5>
                    </NavLink>
                    <NavLink to="/explore/filaments">
                        <h5 className="text-white">Filaments</h5>
                    </NavLink>
                    <NavLink to="/explore/diy">
                        <h5 className="text-white">Diy</h5>
                    </NavLink>
                    <NavLink to="/explore/stem">
                        <h5 className="text-white">Stem Games</h5>
                    </NavLink>
                </div>
            </section>
        </React.Fragment>
    )
}

export default  ExploreNavBar;