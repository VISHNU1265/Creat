import React from "react";
import ContactNavBar from "./ContactNavBar";

let ContactFAQ = ()=>{
    return (
        <React.Fragment>
            <ContactNavBar></ContactNavBar>
            <section className="mt-5">
                <div className="container ">
                    <div className="row text-center text-white">
                        <h2>FAQs</h2>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <p>
                                                <b>Curabitur aliquet ispum dolor amet sit pellentesqu?</b>
                                            </p>
                                            <p>
                                                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae
                                            </p>
                                        </li>
                                        <li className="list-group-item">
                                            <p>
                                                <b>Pellentesque in ipsum id orci porta dapibus?
                                                </b>
                                            </p>
                                            <p>
                                                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae
                                            </p>
                                        </li>
                                        <li className="list-group-item">
                                            <p>
                                                <b>Nulla porttitor accumsan tincidunt?</b>
                                            </p>
                                            <p>
                                                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ContactFAQ ;