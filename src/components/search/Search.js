import React from "react";
let Search = ()=>{
    return (
        <React.Fragment>

            <section className="container w-50 mt-5">

                    <div className="input-group  mt-3">
                        <input type="text" className="form-control" placeholder=""></input>
                        <span className="input-group-text bg-success">
                            <i className="fa fa-search"></i>
                        </span>
                    </div>
            </section>

        </React.Fragment>
    )
}

export default Search;