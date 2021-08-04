
import heroimg from './img/hero1.jpg';




const Landing = () => {
    return ( 
        <section 
        className="landing" 
        style={{backgroundImage:`url(${heroimg})`}}>

            <div className="container">
            <div className="row justify-content-center align-items-center ">
                
            <div className="col-lg-8 col-md-12 mb-3 text-center">
                <h1>
                    I am Ingenious
                </h1>

                <span className="word-span">| FULL STACK DEVELOPER </span>
                <span className="word-span">| PYTHON DEVELOPER |</span>
                    <div className="buttons mt-3 ">
                <button className="btn btn-outline-white l-btn">Hire Me</button>
                <button className="btn btn-outline-white  cv-btn">Download Cv</button>
                    </div>
                

            </div>
                
            </div>
        </div>
  
        </section>
           );
}
 
export default Landing;
