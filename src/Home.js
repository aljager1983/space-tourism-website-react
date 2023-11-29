import Navbar from "./Navbar";
import logo from "./assets/shared/logo.svg";

const Home = () => {
    return ( 
        <div className="home">
            <Navbar />
            <div className="logo">
                <img src={logo} alt="star-logo" className="logo-icon" />  
                <hr />
            </div>
            
            <div className="homeContext">
                <h1>SO, YOU WANT TO TRAVEL TO</h1>
                <h2>SPACE</h2>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        
                <h3>EXPLORE</h3>
            </div>
             
        </div>
     );
}
 
export default Home;