import React from "react";
import ContactNavBar from "./ContactNavBar";

let Contact = ()=>{
    return (
        <React.Fragment>
            <ContactNavBar></ContactNavBar>
            <section className="mt-5">
                <div className="container ">
                    <div className="row text-center text-white">
                        <h2>Contact US</h2>
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
                                                <b>Support & Sales</b>
                                            </p>
                                            <p>
                                                (34)2122222
                                            </p>
                                        </li>
                                        <li className="list-group-item">
                                            <p>
                                                <b>Email</b>
                                            </p>
                                            <p>
                                                info@divielectronicsstore.com
                                            </p>
                                        </li>
                                        <li className="list-group-item">
                                            <p>
                                                <b>Shop</b>
                                            </p>
                                            <p>
                                                Calle de Maldonado 60 Madrid Spain
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

export default  Contact;