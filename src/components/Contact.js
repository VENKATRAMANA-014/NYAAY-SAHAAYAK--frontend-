// const Contact = () => {
//     return ( 
//         <>
 

//  <section class="contact" id="contact">
//             <div class="heading text-center">
//                 <h2>Contact Us</h2>
//                 <p>Feel free to get in touch for any questions or inquires. We would more than happy to assist you!</p>
//             </div>
//             <div class="row">
//                 <div class="col-md-5">
//                     <div class="title">
//                         <h3>Contact detail</h3>
//                     </div>
//                     <div class="content">
                        
//                         <div class="info">
//                             <i class="fas fa-mobile-alt"></i>
//                             <h4 class="d-inline-block">PHONE:
                                
//                                 <span>+12457836913 , +12457836913</span></h4>
//                         </div>
//                         <div class="info mail">
//                             <i class="far fa-envelope"></i>
//                             <h4 class="d-inline-block">EMAIL:
                                
//                                 <span>nyaayshayak@info.com</span></h4>
//                         </div>
                        
//                         <div class="info">
//                             <i class="fas fa-map-marker-alt"></i>
//                             <h4 class="d-inline-block">ADDRESS:
//                                 <span>
//                                     kmit,hyderabad,india telangana,52451</span></h4>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col-md-7">
//                     <form>
//                         <div class="row">
//                             {/* <div class="col-sm-12">
//                                 <input type="text" class="form-control" placeholder="Name"></input>
//                             </div> */}
//                             <div class="col-sm-12 ">
//                                 <input type="text" class="form-control" placeholder="Email"></input>
//                             </div>
//                             <div class="col-sm-12">
//                                 <input type="text" class="form-control" placeholder="Subject"></input>
//                             </div>
//                         </div>
//                         <div class="form-group">
//                             <textarea class="form-control" rows="5" id="comment" placeholder="Feedback"></textarea>
//                         </div>
//                         <button class="btn btn-block" type="submit">Send Now!</button>
//                     </form>
//                 </div>
//             </div>
        
//     </section>







//     {/* <footer class="footer1">
//         <p>&copy; 2023 Nyaay Sahaayak Services</p>
//     </footer> */}
//     </>

//      );
// }
 
// export default Contact;










import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [contactData, setContactData] = useState({
    email: "",
    subject: "",
    feedback: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    submitted: false,
    success: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and subject on the client side
    if (!contactData.email || !contactData.subject) {
      setSubmissionStatus({
        submitted: true,
        success: false,
        error: true,
        message: 'Email and Subject are required fields',
      });
      return;
    }

    // Send contact data to the backend
    axios
      .post("http://localhost:5000/contact", contactData)
      .then((res) => {
        console.log(res.data);

        // Update submission status
        setSubmissionStatus({
          submitted: true,
          success: res.data.success,
          error: !res.data.success,
          message: res.data.message,
        });

        // Reload the page after successful submission
        if (res.data.success) {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.error(err);
        // Update submission status for error
        setSubmissionStatus({
          submitted: true,
          success: false,
          error: true,
          message: "Failed to submit contact form. Please try again.",
        });
      });
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="heading text-center">
          <h2>Contact Us</h2>
          <p>Feel free to get in touch for any questions or inquiries. We would be more than happy to assist you!</p>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="title">
              <h3>Contact detail</h3>
            </div>
            <div className="content">
              <div className="info">
                <i className="fas fa-mobile-alt"></i>
                <h4 className="d-inline-block">
                  PHONE:
                  <span>+951957836913 , +91857836913</span>
                </h4>
              </div>
              <div className="info mail">
                <i className="far fa-envelope"></i>
                <h4 className="d-inline-block">
                  EMAIL:
                  <span>nyaayshaayak@gmail.com</span>
                </h4>
              </div>
              <div className="info">
                <i className="fas fa-map-marker-alt"></i>
                <h4 className="d-inline-block">
                  ADDRESS:
                  <span>Kmit collage, Hyderabad, India Telangana, 52451</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-12 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={contactData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    value={contactData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="5"
                  id="comment"
                  placeholder="Feedback"
                  name="feedback"
                  value={contactData.feedback}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button className="btn btn-block" type="submit">
                Send Now!
              </button>
            </form>
            {submissionStatus.submitted && (
              <div style={{ marginTop: "10px", color: submissionStatus.success ? "green" : "red" }}>
                {submissionStatus.message}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
