import Aos from "aos";
import { useEffect } from "react";

const Profile = () => {
    useEffect(()=>{
        Aos.init({duration:200});
    }, []);
    return ( 
        <section className="profile" id="profile">
                    <div className="container">
                        <div className="row justify-content-center ">
                            <div className="col-lg-6 text-center" data-aos="fade-right">
                                <h3>Profile</h3>
	   			                <p>Experienced web developer with a history of deploying web applications which offers great 
                                       backend , simplicity and responsiveness. 
                                </p>
                                <ul class="info-list">
                                    <li>
                                        <strong>Fullname:</strong>
                                        <span>Akinwumi Iyanuoluwa Ayomiposi</span>
                                    </li>

                                    <li>
                                        <strong>Contact:</strong>
                                        <span>omoakinwumi@outlook.com</span>
                                        <span className="mt-2">+234 70 654 873 42</span>
                                    </li>
                                </ul>
	   		                </div>

                               <div className="col-lg-6 text-center" data-aos="fade-up">
                                        <h3>Skills</h3>
                                <ul >
                                <li>
                                    <strong>Python </strong>
                                    (Django, Django-Rest)
                                </li>
                                <li>
                                    <strong>JavaScript</strong>
                                    (React js)
                                </li>
                                <li>
                                    <strong>Databases</strong>
                                    (Postgresql, Sqlite, MySQL)
                                </li>
                            </ul>
                            <button className="btn btn-outline-white p-btn shadow-none" type="button">Download Cv</button>
                            </div>
                         
                            </div>
                           
                        </div>
                    
                </section>
              
     );
}
 
export default Profile;
