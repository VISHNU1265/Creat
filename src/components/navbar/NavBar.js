import React from "react";
import {NavLink} from "react-router-dom";
import creatImg from "../../assets/img/Creat Logo Whte.png"
let NavBar = ()=>{

    return (
        <React.Fragment>
            <div>
                <nav className="navbar bg-success navbar-expand-lg navbar-light">
                    <div className="container">
                        <ul className="navbar-nav display-flex align-items-center">
                            <li className="nav-item mx-3">
                                <NavLink to="/">
                                    <img src={creatImg} width="100" alt=""/>
                                </NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink to="/">
                                    <h5 className="text-white">Home</h5>
                                </NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink to="/explore">
                                    <h5 className="text-white">Explore</h5>
                                </NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink to="/activity">
                                    <h5 className="text-white">Activity</h5>
                                </NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink to="/community">
                                    <h5 className="text-white">Community</h5>
                                </NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink to="/pages">
                                    <h5 className="text-white">Pages</h5>
                                </NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink to="/contact">
                                    <h5 className="text-white">Contact</h5>
                                </NavLink>
                            </li>
                            <li className="nav-item mx-5">

                            </li>

                            <li className="nav-item mx-3 d-flex align-items-center">
                                <NavLink className="mx-3" to="/search">
                                    <i className="fa text-white fa-search fa-1x">

                                    </i>
                                </NavLink>
                                <a className="mx-3" href="https://walletconnect.com/" target="_blank">
                                    <div className="rounded-pill bg-dark text-white px-3 py-2">
                                        <h5 className="">
                                            <i className="fa fa-google-wallet mx-1"></i>
                                            Wallet Connect</h5>
                                    </div>
                                </a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>

        </React.Fragment>
    )
}

export default  NavBar;