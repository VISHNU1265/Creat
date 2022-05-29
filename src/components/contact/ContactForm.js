import React from "react";
import ContactNavBar from "./ContactNavBar";

let Contact = ()=>{
    return (
        <React.Fragment>
            <ContactNavBar></ContactNavBar>
            <section className="mt-5">
                <div className="container ">
                    <div className="row text-center text-white">
                        <h2>Any Query?</h2>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <div className="form-group my-4">
                                                <input type="text" className="form-control p-2" placeholder="Name"/>
                                            </div>
                                            <div className="form-group my-4">
                                                <input type="email" className="form-control p-2"  placeholder="Email"/>
                                            </div>
                                            <div className="form-group my-4">
                                                <textarea className="form-control" placeholder="Query">

                                                </textarea>
                                            </div>
                                            <div className="form-group my-2">
                                                <input type="submit" className="btn btn-success" value="Submit"/>
                                            </div>

                                        </div>
                                    </form>
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