import { useState } from "react";
const Navbar = () => {

	const [visble , setVisible] = useState(false)
    return ( 
        <nav className="navbar bg-dark fixed-top navbar-light nav">
            <div className="container">
			<a className="navbar-brand">IngeniousDev</a>
			

		</div>
        </nav>
		
     );
}
 
export default Navbar;