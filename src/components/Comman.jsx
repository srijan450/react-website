import React from 'react'
import { Link } from 'react-router-dom';
import img from "../images/home.jpg"
function Comman({ heading, main, subheading, butn, link }) {
    return (
        <section className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-0 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" style={{ textAlign: 'justify' }}>
                                <h1>{heading} <strong className="d-block brand-name">{main}</strong></h1>
                                <h2 className="my-2" style={{ color: 'grey', fontSize: '1.5rem' }}>{subheading}</h2>
                                <div className="mt-3">
                                    <Link to={link} className="btn-get-started">{butn}</Link>
                                </div>
                            </div>

                            <div className="col-lg-6 order-1 order-lg-2 p-5 header-img">
                                <img src={img} className="img-fluid animated" alt="homeimg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comman
