import { Link } from "react-router-dom";

const MyNav = () => {
    return (
        <>
        <div>
         <header>
            <h1 class="pad" style={{color:"white"}}>NYAAY SAHAAYAK</h1>
             {/* <div class=' align-self-end '>
        <Link  to="/login">
            <button type="button" >Login</button>
            
         </Link>
        </div>  */}
        </header>
        
        
        <nav class="navbar navbar-expand-sm navbar" style={{backgroundColor: 'grey'}}>
            <Link class="navbar-brand" style={{leftpadding:'10x'}} to="/"></Link>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                     
                </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0 ul list">
                    <li class="nav-item   col link">
                        <Link class=" col  " to="/" aria-current="page">Home <span class="visually-hidden">(current)</span></Link>
                    </li>
                    {/* <li class="nav-item link">
                        <Link class=" col" to="/services">Services</Link>
                    </li>
                    <li class="nav-item link">
                        <Link class=" col" to="/about">About Us</Link>
                    </li> */}
                    <li class="nav-item link">
                        <Link class=" col" to="/contact">Contact Us</Link>
                    </li>

                        <li class="nav-item dropdown"> 
                            {/* <a class="nav-link dropdown-toggle col" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
                            <Link class=" dropdown-toggle link " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                FAQs
                            </Link>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <Link class="dropdown-item" to="/KeyFeatures/LawTypes">Lawtypes & their FAQs</Link>
                                {/* <Link class="dropdown-item" to="/FAQs">General questions</Link> */}
                                
                                {/* <li><button class="dropdown-item" href="#">Another action</button></li> */}
                                {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                            </ul>
                        </li>
                        {/* <Link  to="/login">
                            <button class="nav-item" >Login</button>
                         </Link>  */}
                         {/* <li class="nav-item link">
                        <Link class="col" to="/login">Sign in</Link>
                    </li>    */}
                    {sessionStorage.getItem("user") ? (
                <>
                  <li className="nav-item link">
                    <div className="nav-item " data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                      Logout
                    </div>
                    
                  </li>
                </>
              ) : (
                <li className="nav-item link" ><Link  to="/login">  Sign In</Link></li>
              )}
                    <li class="nav-item link"><Link class="col" to="/chatBot">Sahaayak</Link> </li>
                <div>

                </div>
                   
                </ul>
            </div>

        {/* <div class=' align-self-end '>
        <Link  to="/login">
            <button class="nav-item" >Login</button>
            
         </Link>
        </div> */}



        </nav>
        </div>
        








        {/* import React from "react";
import { Link } from "react-router-dom";
import Profile from "../components/Icons/Profile";
import Logout from "../components/Icons/Logout";
const DropdownMenu = () => {
  return (
    <ul className="dropdown-menu">
      <li className="nav-item illie">
        <Link className="dropdown-link" to="/constitution">Constitutional Law</Link>
      </li>
      <li className="nav-item illie">
        <Link className="dropdown-link" to="/criminal">Criminal Law</Link>
      </li>
      <li className="nav-item illie">
        <Link className="dropdown-link" to="/corporate">Corporate Law</Link>
      </li>
      <li className="nav-item illie">
        <Link className="dropdown-link" to="civil">Civil Law</Link>
      </li>
      <li className="nav-item illie">
        <Link className="dropdown-link" to="/cyber">Cyber Law</Link>
      </li>
      <li className="nav-item illie">
        <Link className="dropdown-link" to="/environmental">Environamental Law</Link>
      </li>
      <li className="nav-item illie">
        <Link className="dropdown-link" to="/family">Family Law</Link>
      </li>
      <li className="nav-item illie">
        <Link className="dropdown-link" to="/intellectual">Intellectual Law</Link>
      </li>
      <li className="nav-item illie">
        <Link className="dropdown-link" to="/labour">Labour Law</Link>
      </li>
      <li className="nav-item illie">
        <Link className="dropdown-link" to="/tax">Tax Law</Link>
      </li>
      
    </ul>
  );
};

const DropdownMenu1 = () => {
  const onclick001=()=>{
    sessionStorage.removeItem('user');
  }
  return (
    <ul className="dropdown-menu">
      <li className="nav-item">
        <Link className="dropdown-link" to="/" ><button onClick={onclick001()} style={{border:"0px",backgroundColor:"white"}}>Logout <Logout/></button></Link>
      </li> 
    </ul>
  );
};


const MyNav = () => {
  return (
    <>
      <div>
        
              {sessionStorage.getItem("user")?(
              <>  <li className="nav-item illie">
              <div className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              Logout
              </div>
              <DropdownMenu1 />
            </li></>):
              (<li className="nav-item" >
                <Link className="nav-link active" to="/login"><Profile/></Link>
              </li>
            )}
            
      </div>
    </>
  );
};

export default MyNav; */}

















        </>
      );
}
 
export default MyNav ;