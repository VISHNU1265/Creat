import React from "react";
import ContactNavBar from "./ContactNavBar";

let ContactMaps = ()=>{
    return (
        <React.Fragment>
            <ContactNavBar></ContactNavBar>
            <section className="mt-5">
                <div className="container ">
                    <div className="row text-center text-white">
                        <h2>Google Maps</h2>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <iframe
                                    className="card-img" title="delhi"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448183.73908065975!2d76.81307179071018!3d28.646677257441542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1653755412951!5m2!1sen!2sin"
                                    width="600" height="450">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default  ContactMaps;