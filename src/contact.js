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

                    <div className="col-lg-8 ">
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

                            <div className="footer">
                                <div className="col-md-12 text-center col-lg-12 mt-5">
                                    <span>© Copyright 2021 | Steelthedev</span>
                                </div>
                            </div>
                        </div>
                    </div>
             
        </section>
     );
}
 
export default Contact;