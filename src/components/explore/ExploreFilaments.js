import React from "react";
import ExploreNavBar from "./ExploreNavBar";
import img1 from "../../assets/explore/filaments/img.png";
import img2 from "../../assets/explore/filaments/img_1.png";
import img3 from "../../assets/explore/filaments/img_2.png";
import img4 from "../../assets/explore/filaments/img_3.png";
let ExploreFilaments = ()=>{
    return (
        <React.Fragment>
            <React.Fragment>
                <ExploreNavBar></ExploreNavBar>
                <section className="container mt-3">
                    <div className="row">
                        <h2 className="text-white text-center mt-3">Filaments</h2>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-3">
                            <div className="card text-center">
                                <div className="card-header">
                                    <img src={img1} className="img-fluid card-img" alt=""/>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-center">
                                <div className="card-header">
                                    <img src={img2} className="img-fluid card-img" alt=""/>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-center">
                                <div className="card-header">
                                    <img src={img3} className="img-fluid card-img" alt=""/>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-center">
                                <div className="card-header">
                                    <img src={img4} className="img-fluid card-img" alt=""/>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        </React.Fragment>
    )
}

export default  ExploreFilaments;