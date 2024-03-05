import { Link } from "react-router-dom";
const KeyFeatures = () => {
    return ( 
        <>
            <div>
                <h2 class="align">Key Features</h2>
            </div>
        <section class= "container1">
            <div class="row">
                <div class="col-md-4 " style={{marginBottom:"20px"}}>
                    <Link to="./legaladvice">
                <button class="lawsession  ">
                    <img src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1702545340/advice_s6ry5c.jpg" class="img" alt="Real-time Legal Advice Logo" />
                    <h3 style={{fontSize:"25px"}}>Lawyer consultation</h3>
                    <p style={{color:"GrayText",fontWeight:"normal"}}>Connect with a licensed legal professional via live video call for personalized advice.</p>
                    </button>
                    </Link>
                </div>

                <div class="col-md-4  " style={{marginBottom:"20px"}}>
                <Link to="/chatbot">
                    <button class="lawsession  ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9fdd26PxxIM7ZZTR0LVW4g9noEqWele_WxA&usqp=CAU" class="img" alt="AI Assistant Logo" />
                        <h3 style={{fontSize:"25px"}}>Naayshaayak</h3>
                        <p style={{color:"GrayText",fontWeight:"normal"}}>Explore AI-powered solutions to simplify your legal processes and make informed decisions.</p>
                    </button>
                </Link>
                </div>

                {/* <div class="col-md-4 " style={{marginBottom:"20px"}}>
                <button class="lawsession   ">
                    <img src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1706346194/a4lvr9p5lnk7akcjrczn.jpg" class="img " alt="On-demand Legal Documents Logo" />
                   <h3 style={{fontSize:"25px"}} >On-demand Legal Documents</h3>
                    <p style={{color:"GrayText"}}>Obtain pre-drafted legal documents such as wills, power of attorney, and more.</p>
                </button>
                </div> */}
                <div class="col-md-4 "style={{marginBottom:"20px"}}>
                    <Link to ="/rights">
                    <button class="lawsession  ">
                        <img src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1702546813/know_bgrbmv.png" class="img" alt="Know Your Rights Logo" />
                        <h3 style={{fontSize:"25px"}}>Know Your Rights and Sections</h3>
                        <p style={{color:"GrayText",fontWeight:"normal"}}>Knowledge is power and can set us free.</p>
                    </button>
                </Link>
                </div>
                {/* <div class="col-md-4 "style={{marginBottom:"20px"}}>
                <button class="lawsession  ">
                   <img src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1702547294/news_fctra5.jpg" class="img" alt="Ethics Review Logo" />
                   <h3 style={{fontSize:"25px"}}>Latest Legal News</h3>
                    <p style={{color:"GrayText"}}>Get updated with legal information</p>
                    </button>
                </div> */}
                
                <div class="col-md-4  " style={{marginBottom:"20px"}}>
                    <Link to="/KeyFeatures/LawTypes">
                    <button class="lawsession   ">
                    <img src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1702632300/ecwbq7oxj2e0nuez44ec.jpg" class="img" alt="Online Marketplace Logo" />
                    <h3 style={{fontSize:"25px"}}>Laws</h3>
                    <p style={{color:"GrayText",fontWeight:"normal"}}>Different types of laws and their info.</p></button>
                    </Link>
                </div>
                {/* <div class="col-md-4 " style={{marginBottom:"20px"}}>
                <button class="lawsession  ">
                    <img src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1706346270/ez3y2rvicuziwanre5lr.jpg" class="img" alt="Integrated Case Management Logo" />
                    <h3 style={{fontSize:"25px"}}>Integrated Case Management</h3>
                    <p style={{color:"GrayText"}}>Access and manage your legal cases through a centralized platform, reducing complexity and confusion.</p>
                    </button>
                </div> */}
                {/* <div class="col-md-4 " style={{marginBottom:"20px"}}>
                <button class="lawsession  ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFXAtIow9O7QEvay4IBXu0Aeo14Iu4TSGxzA&usqp=CAU" class="img" alt="Automated Legal Filing Logo" />
                    
                    <h3 style={{fontSize:"25px"}}>Automated Legal Filing</h3>
                    
                    <p style={{color:"GrayText"}} >Automate the legal filing process with a dedicated legal expert handling all your case updates and modifications.</p>
                    
                    </button>
                </div> */}
                <div class="col-md-4 " style={{marginBottom:"20px"}}>
                    <Link to="./booking">
                <button class="lawsession  ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1sGSmcfw0KICe9HUXlgrzPcZIUedP9VWWOQ&usqp=CAU" class="img" alt="Online Appointment Booking Logo" />
                    <div>
                    <h3 style={{fontSize:"25px"}}>Online Appointment Booking</h3>
                    <p style={{color:"GrayText",fontWeight:"normal"}}>Book a consultation with a legal expert through our secure and user-friendly online platform.</p>
                    </div>
                    </button>
                    </Link>
                </div>
            </div>


        </section>

        </>
     );
}
 
export default KeyFeatures;