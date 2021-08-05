
import p1 from './img/p1.jpg';
import { SRLWrapper } from 'simple-react-lightbox';
import ScrollAnimation from 'react-animate-on-scroll';

const Portfolio = () => {
    return ( 
        <section className="portfolio" id="portfolio">
            <div className="container">
                <div className="row justify-content-center " >
                    <div className="col-lg-12 col-md-12 mb-5 text-center">
                        <h2>
                            Portfolio
                        </h2>
                    </div>

                    
                        
                    <div className="col-lg-4 col-md-4 m-b-120">
                            <a href={p1}>
                            <img src={p1} alt="web development" width="100%" />
                            </a>
                          
                            </div>

                            <div className="col-lg-4 col-md-4 m-b-120">
                            <a href={p1}>
                            <img src={p1} alt="web development" width="100%" />
                            </a>
                          
                            </div>

                            <div className="col-lg-4 col-md-4 m-b-120">
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