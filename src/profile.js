const Profile = () => {
    return ( 
        <section className="profile">
                    <div className="container">
                        <div className="row justify-content-center ">
                            <div className="col-lg-6 text-center">
                                <h3>Profile</h3>
	   			                <p>Experienced web developer with a history of deployign web applications which offers great 
                                       backend , simplicity and responsiveness. 
                                </p>
                                <ul class="info-list">
                                    <li>
                                        <strong>Fullname:</strong>
                                        <span>Akinwumi Iyanuoluwa Ayomiposi</span>
                                    </li>
                                    <li>
                                        <strong>Website:</strong>
                                        <span><a href="index.html">steelthedev.github.io</a></span>
                                    </li>
                                </ul>
	   		                </div>

                               <div className="col-lg-6 text-center">
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