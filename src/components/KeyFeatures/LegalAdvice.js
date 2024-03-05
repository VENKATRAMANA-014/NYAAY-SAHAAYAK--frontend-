import { Link } from "react-router-dom";
const LegalAdvice = () => {
    return ( 
        <>
    
        
    <div class="container2" style={{marginTop:"28px",marginBottom:"28px"}}>
        <h1 class="head">Real-time Legal Advice</h1>
        <p class="p">Connect with a licensed legal professional via live video call for 
        personalized advice. We will make every effort to have you connected to an attorney in your jurisdiction.
         If not, you will be connected to an attorney who can assist you based on the general principles of law.</p>
        {/* <button class="button2">Connect with an Attorney</button> */}



        {/* <section class="section1"> */}

<div class="lawyer-profile" style={{padding:"10px"}}>
    <div class="profile-info" >
        <h2 >Rajendra Prasad</h2>
        <div style={{paddingLeft:"10px"}} >
            <p>Experienced attorney specializing in [Area of Law].</p>
            <p><strong>Experience:</strong> 10+ years</p>
            <p class="contact-info"><strong>Contact:</strong> rajendraprasad@gmail.com</p>
            <p><strong>Phone:</strong> 9648135745</p>
            <p><strong>Location:</strong> Hyderabad, Telangana</p>
            <Link  style={{textAlign:"left",fontWeight:"normal",marginTop:"10px"}} to="/booking" class="cta-button">Schedule Consultation</Link>
        </div>
    </div>
    <div class="profile-image" style={{padding:"10px"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-gLgH5x01_vAAhGr2yXXiryJkIl58WP7SQ&usqp=CAU" alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"  />
    </div>
</div>


<div class="lawyer-profile" style={{padding:"10px"}}>
    <div class="profile-info" >
        <h2 >Vijay Maalya</h2>
        <div style={{paddingLeft:"10px"}} >
            <p>Dedicated lawyer with expertise in [Area of Law].</p>
            <p><strong>Experience:</strong> 8+ years</p>
            <p class="contact-info"><strong>Contact:</strong> Vijaymaalya@gmail.com</p>
            <p><strong>Phone:</strong> 9648184445</p>
            <p><strong>Location:</strong> Hyderabad, Telangana</p>
            <Link  style={{textAlign:"left",fontWeight:"normal",marginTop:"10px"}} to="/booking" class="cta-button">Schedule Consultation</Link>
        </div>
    </div>
    <div class="profile-image" style={{padding:"10px"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-gLgH5x01_vAAhGr2yXXiryJkIl58WP7SQ&usqp=CAU" alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"  />
    </div>
</div>

        

<div class="lawyer-profile" style={{padding:"10px"}}>
    <div class="profile-info" >
        <h2 >Rajendra Prasad</h2>
        <div style={{paddingLeft:"10px"}} >
            <p>Experienced attorney specializing in [Area of Law].</p>
            <p><strong>Experience:</strong> 10+ years</p>
            <p class="contact-info"><strong>Contact:</strong> rajendraprasad@gmail.com</p>
            <p><strong>Phone:</strong> 9648135745</p>
            <p><strong>Location:</strong> Hyderabad, Telangana</p>
            <Link  style={{textAlign:"left",fontWeight:"normal",marginTop:"10px"}} to="/booking" class="cta-button">Schedule Consultation</Link>
        </div>
    </div>
    <div class="profile-image" style={{padding:"10px"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-gLgH5x01_vAAhGr2yXXiryJkIl58WP7SQ&usqp=CAU" alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"  />
    </div>
</div>


     
    {/* </section> */}




    </div>


        



    {/* <script>
        const connectBtn = document.getElementById('connectBtn');

        connectBtn.addEventListener('click', () => {
            // Call the appropriate function or API endpoint to initiate the live video call with a legal professional
        });
    </script> */}

        
        
        
        
        
        </>
     );
}
 
export default LegalAdvice;