const Contact = () => {
    return ( 
        <section className="contact" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-8 text-center">
                        <h2>
                            Contact
                        </h2>
                        <h6>
                            I will like to hear from you , kindly fill the form below to contact me
                        </h6>
                    </div>

                    <div className="col-lg-8">
                        <form action="/" method="post">
                            <div className="row justify-content-center ">
                                <div className="col-lg-8 col-md-12">
                                    <div className="form-group mt-4">
                                        <input type="text" className="form-control shadow-none" placeholder="Full Name" />
                                    </div>
                                
                                    <div className="form-group mt-4">
                                        <input type="text" className="form-control shadow-none" placeholder="Phone No" />
                                    </div>

                                    <div className="form-group mt-4">
                                        <input type="text" className="form-control shadow-none" placeholder="Email" />
                                    </div>

                                    <div className="form-group mt-4">
                                        <textarea name="message" className="form-control shadow-none" placeholder="Message" id="" cols="30" rows="10"></textarea>
                                    </div>
                                
                                <button type="button" className="btn btn-outline-white shadow-none c-btn">SUBMIT</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-12 col-lg-8 text-center">
                        <div className="row justify-content-center mt-5 pt-3 mb-4">
                            <div className="col-6 text-center">
                                <div className="contact-footer">
                                <i className="fa fa-inbox"></i>
                                <h5>
                                    EMAIL ME AT
                                </h5>
                               <ul>
                                   <li>akinwumikaliyanu@gmail.com</li>
                                   <li>omoakinwumi@outlook.com</li>
                               </ul>
                                </div>
                               
                            </div>

                            <div className="col-6 ">
                                <div className="contact-footer">
                                <i className="fa fa-phone"></i>
                                <div>
                                <h5>
                                    CALL ME ON
                                </h5>
                                </div>
                                
                               <ul className="">
                                   <li>+234 70 654 873 42 </li>
                                   <li>+234 70 686 248 14</li>
                               </ul>
                                </div>
                            </div>

                            <div className="footer">
                                <div className="col-md-12 col-lg-12 mt-5">
                                    <span>© Copyright 2021 | Steelthedev</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Contact;