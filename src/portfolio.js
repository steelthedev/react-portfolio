
import p1 from './img/p1.jpg';
import { SRLWrapper } from 'simple-react-lightbox';
import ScrollAnimation from 'react-animate-on-scroll';
import { useEffect } from 'react';
import Aos from 'aos';

const Portfolio = () => {
    useEffect(()=>{
        Aos.init({duration:1000});
    },[]);
    return ( 
        <section className="portfolio" id="portfolio">
            <div className="container">
                <div className="row justify-content-center " >
                    <div className="col-lg-12 col-md-12 mb-5 text-center">
                        <h2>
                            Portfolio
                        </h2>
                    </div>

                    
                        
                    <div className="col-lg-4 col-md-4 m-b-120 mt-2" data-aos="fade-up">
                            <a href={p1}>
                            <img src={p1} alt="web development" width="100%" />
                            </a>
                    </div>

                        
                    <div className="col-lg-4 col-md-4 m-b-120 mt-2" data-aos="fade-down">
                            <a href={p1}>
                            <img src={p1} alt="web development" width="100%" />
                            </a>
                    </div>

    
                    <div className="col-lg-4 col-md-4 m-b-120 mt-2" data-aos="fade-up">
                            <a href={p1}>
                            <img src={p1} alt="web development" width="100%" />
                            </a>
                    </div>

                    
                    <div className="col-lg-4 col-md-4 m-b-120 mt-2" data-aos="fade-right">
                            <a href={p1}>
                            <img src={p1} alt="web development" width="100%" />
                            </a>
                    </div>

                    
                    <div className="col-lg-4 col-md-4 m-b-120 mt-2" data-aos="fade-left">
                            <a href={p1}>
                            <img src={p1} alt="web development" width="100%" />
                            </a>
                    </div>


        
              
    
                 
                </div>
            </div>
          
            
        </section>

    )
}
 
export default Portfolio;