// const Booking = () => {
//     return ( 
//         <>

// <body class="body11">

// <div class="formbold-main-wrapper">
  
//   <div class="formbold-form-wrapper">
//     <form action="https://" method="POST">
//       <div class="formbold-mb-5">
//         <label for="name" class="formbold-form-label"> Full Name </label>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           placeholder="Full Name"
//           class="formbold-form-input"
//         />
//       </div>
//       <div class="formbold-mb-5">
//         <label for="phone" class="formbold-form-label"> Phone Number </label>
//         <input
//           type="text"
//           name="phone"
//           id="phone"
//           placeholder="Enter your phone number"
//           class="formbold-form-input" style={{borderBlockColor:"#6a64f1"}}
//         />
//       </div>
//       <div class="formbold-mb-5">
//         <label for="email" class="formbold-form-label"> Email Address </label>
//         <input
//           type="text"
//           name="email"
//           id="email"
//           placeholder="Enter your email"
//           class="formbold-form-input"
//         />
//       </div>
//       <div class="flex flex-wrap formbold--mx-3">
//         <div class="w-full sm:w-half formbold-px-3">
//           <div class="formbold-mb-5 w-full">
//             <label for="date" class="formbold-form-label"> Date </label>
//             <input
//               type="date"
//               name="date"
//               id="date"
//               class="formbold-form-input"
//             />
//           </div>
//         </div>
//         <div class="w-full sm:w-half formbold-px-3">
//           <div class="formbold-mb-5">
//             <label for="time" class="formbold-form-label"> Time </label>
//             <input
//               type="time"
//               name="time"
//               id="time"
//               class="formbold-form-input"
//             />
//           </div>
//         </div>
//       </div>

//       <div class="formbold-mb-5 formbold-pt-3">
//         <label class="formbold-form-label formbold-form-label-2">
//           Address Details
//         </label>
//         <div class="flex flex-wrap formbold--mx-3">
//           <div class="w-full sm:w-half formbold-px-3">
//             <div class="formbold-mb-5">
//               <input
//                 type="text"
//                 name="area"
//                 id="area"
//                 placeholder="Enter area"
//                 class="formbold-form-input"
//               />
//             </div>
//           </div>
//           <div class="w-full sm:w-half formbold-px-3">
//             <div class="formbold-mb-5">
//               <input
//                 type="text"
//                 name="city"
//                 id="city"
//                 placeholder="Enter city"
//                 class="formbold-form-input"
//               />
//             </div>
//           </div>
//           <div class="w-full sm:w-half formbold-px-3">
//             <div class="formbold-mb-5">
//               <input
//                 type="text"
//                 name="state"
//                 id="state"
//                 placeholder="Enter state"
//                 class="formbold-form-input"
//               />
//             </div>
//           </div>
//           <div class="w-full sm:w-half formbold-px-3">
//             <div class="formbold-mb-5">
//               <input
//                 type="text"
//                 name="post-code"
//                 id="post-code"
//                 placeholder="Post Code"
//                 class="formbold-form-input"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <button class="formbold-btn">Book Appointment</button>
//       </div>
//     </form>
//   </div>
// </div>

// </body>     
        
        
        
        
        
        
        
//         </>
//      );
// }
 
// export default Booking;














import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    area: '',
    city: '',
    state: '',
    postCode: '',
    advocate: '', // Add new field
    contactMethod: '', // Add new field for contact method
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    submitted: false,
    success: false,
    error: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const mandatoryFields = ['name', 'phone', 'email', 'date', 'time', 'area', 'city', 'state', 'postCode'];

    if (mandatoryFields.some((field) => !bookingData[field])) {
      setSubmissionStatus({
        submitted: true,
        success: false,
        error: true,
        message: 'Please fill in all mandatory fields.',
      });
      return;
    }

    // Send a POST request to your backend
    axios
      .post('http://localhost:5000/book-appointment', bookingData)
      .then((res) => {
        console.log(res.data);

        // Update submission status
        setSubmissionStatus({
          submitted: true,
          success: res.data.success,
          error: !res.data.success,
          message: res.data.message,
        });
      })
      .catch((err) => {
        console.error(err);
        // Update submission status for error
        setSubmissionStatus({
          submitted: true,
          success: false,
          error: true,
          message: 'Failed to book appointment. Please try again.',
        });
      });
  };

  return (
    <>
      <body className="body11">
        <div className="formbold-main-wrapper">
          <div className="formbold-form-wrapper">
            <form action="https://" method="POST" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="formbold-mb-5">
                <label htmlFor="name" className="formbold-form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={bookingData.name}
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="formbold-mb-5">
                <label htmlFor="phone" className="formbold-form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="formbold-form-input"
                  style={{ borderBlockColor: '#6a64f1' }}
                  onChange={handleChange}
                  value={bookingData.phone}
                  required
                />
              </div>

              {/* Email Address */}
              <div className="formbold-mb-5">
                <label htmlFor="email" className="formbold-form-label">
                  Email Address
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={bookingData.email}
                  required
                />
              </div>

              {/* Date */}
              <div className="formbold-mb-5">
                <label htmlFor="date" className="formbold-form-label">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={bookingData.date}
                  required
                />
              </div>

              {/* Time */}
              <div className="formbold-mb-5">
                <label htmlFor="time" className="formbold-form-label">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={bookingData.time}
                  required
                />
              </div>

              {/* Address Details */}
              <div className="formbold-mb-5 formbold-pt-3">
                <label className="formbold-form-label">
                  Address Details
                </label>
                <div className="flex flex-wrap formbold--mx-3">
                  {/* Area */}
                  <div className="w-full sm:w-half formbold-px-3">
                    <div className="formbold-mb-5">
                      <input
                        type="text"
                        name="area"
                        id="area"
                        placeholder="Enter area"
                        className="formbold-form-input"
                        onChange={handleChange}
                        value={bookingData.area}
                        required
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div className="w-full sm:w-half formbold-px-3">
                    <div className="formbold-mb-5">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Enter city"
                        className="formbold-form-input"
                        onChange={handleChange}
                        value={bookingData.city}
                        required
                      />
                    </div>
                  </div>

                  {/* State */}
                  <div className="w-full sm:w-half formbold-px-3">
                    <div className="formbold-mb-5">
                      <input
                        type="text"
                        name="state"
                        id="state"
                        placeholder="Enter state"
                        className="formbold-form-input"
                        onChange={handleChange}
                        value={bookingData.state}
                        required
                      />
                    </div>
                  </div>

                  {/* Post Code */}
                  <div className="w-full sm:w-half formbold-px-3">
                    <div className="formbold-mb-5">
                      <input
                        type="text"
                        name="postCode"
                        id="postCode"
                        placeholder="Post Code"
                        className="formbold-form-input"
                        onChange={handleChange}
                        value={bookingData.postCode}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Advocate */}
              <div className="formbold-mb-5">
                <label htmlFor="advocate" className="formbold-form-label">
                  Advocate
                </label>
                <input
                  type="text"
                  name="advocate"
                  id="advocate"
                  placeholder="Advocate name"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={bookingData.advocate}
                />
              </div>

              {/* Contact Method */}
              <div className="formbold-mb-5">
                <label htmlFor="contactMethod" className="formbold-form-label">
                  Preferred Contact Method
                </label>
                <select
                  name="contactMethod"
                  id="contactMethod"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={bookingData.contactMethod}
                  required
                >
                  <option value="">Select Contact Method</option>
                  <option value="video">Video Call</option>
                  <option value="faceToFace">Face to Face</option>
                  <option value="phone">Phone Call</option>
                </select>
              </div>

              {/* Submit button */}
              <div>
                <button type="submit" className="formbold-btn">
                  Book Appointment
                </button>
              </div>

              {/* Display submission status */}
              {submissionStatus.submitted && (
                <div style={{ marginTop: '10px', color: submissionStatus.success ? 'green' : 'red' }}>
                  {submissionStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </body>
    </>
  );
};

export default Booking;
