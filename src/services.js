import Aos from "aos";

import { useEffect } from "react";

const Services = () => {

useEffect(()=>{
    Aos.init({duration:2000});
}, []);
    return ( 
        <section className="services" id="services">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-12 text-center mb-4">
                        <h2>
                            Services
                        </h2>
                        <p>
                            What I Can Render
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center">

                <div className="col-md-4 col-lg-4 mt-4 mb-5" data-aos="fade-right">
                        <div className="work-single">
                            <div className="work-icon">
                                <i className="fa fa-tags"></i>
                            </div>

                            <div className="work-title">
                                Web Development
                            </div>
                            <div className="work-words">
                                <p>
                                I value work ethics and deliver projects within allocated time . I love solving 
                                problems I encounter fron time to time
                                </p>
                            </div>
                        </div>
                </div>


                <div className="col-md-4 col-lg-4 mt-4 mb-5" data-aos="fade-up">
                        <div className="work-single">
                            <div className="work-icon">
                                <i className="fa fa-tags"></i>
                            </div>

                            <div className="work-title">
                                Web Development
                            </div>
                            <div className="work-words">
                                <p>
                                I value work ethics and deliver projects within allocated time . I love solving 
                                problems I encounter fron time to time
                                </p>
                            </div>
                        </div>
                </div>

                <div className="col-md-4 col-lg-4 mt-4 mb-5" data-aos="fade-left">
                        <div className="work-single">
                            <div className="work-icon">
                                <i className="fa fa-tags"></i>
                            </div>

                            <div className="work-title">
                                Web Development
                            </div>
                            <div className="work-words">
                                <p>
                                I value work ethics and deliver projects within allocated time . I love solving 
                                problems I encounter fron time to time
                                </p>
                            </div>
                        </div>
                </div>
 
               
 
            
                  
                </div>
            </div>
        </section>
     );
}
 
export default Services;
