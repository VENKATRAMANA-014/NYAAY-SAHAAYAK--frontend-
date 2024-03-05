// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import styles from "./styles.module.css";

// const Signup = () => {
// 	const [data, setData] = useState({
// 		firstName: "",
// 		lastName: "",
// 		email: "",
// 		password: "",
// 	});
// 	const [error, setError] = useState("");
// 	const navigate = useNavigate();

// 	const handleChange = ({ currentTarget: input }) => {
// 		setData({ ...data, [input.name]: input.value });
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const url = "http://localhost:8080/api/users";
// 			const { data: res } = await axios.post(url, data);
// 			navigate("/login");
// 			console.log(res.message);
// 		} catch (error) {
// 			if (
// 				error.response &&
// 				error.response.status >= 400 &&
// 				error.response.status <= 500
// 			) {
// 				setError(error.response.data.message);
// 			}
// 		}
// 	};

// 	return (
// 		<div className={styles.signup_container}>
// 			<div className={styles.signup_form_container}>
// 				<div className={styles.left}>
// 					<h1>Welcome Back</h1>
// 					<Link to="/login">
// 						<button type="button" className={styles.white_btn}>
// 							Sign in
// 						</button>
// 					</Link>
// 				</div>
// 				<div className={styles.right}>
// 					<form className={styles.form_container} onSubmit={handleSubmit}>
// 						<h1>Create Account</h1>
// 						<input
// 							type="text"
// 							placeholder="First Name"
// 							name="firstName"
// 							onChange={handleChange}
// 							value={data.firstName}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="text"
// 							placeholder="Last Name"
// 							name="lastName"
// 							onChange={handleChange}
// 							value={data.lastName}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="email"
// 							placeholder="Email"
// 							name="email"
// 							onChange={handleChange}
// 							value={data.email}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="password"
// 							placeholder="Password"
// 							name="password"
// 							onChange={handleChange}
// 							value={data.password}
// 							required
// 							className={styles.input}
// 						/>
// 						{error && <div className={styles.error_msg}>{error}</div>}
// 						<button type="submit" className={styles.green_btn}>
// 							Sign Up
// 						</button>
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Signup;


// import { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import styles from './styles.module.css';

// const Signup = () => {
//   const navigate = useNavigate();
//   const [isError, setIsError] = useState(false);
//   const [data, setData] = useState({ email: '', password: '',name:''});

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios.post('http://localhost:5000/signup', data)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data.success) {
//           sessionStorage.setItem("user",res.data);
//           setIsError(false);
//           navigate('/'); // Redirect to the login page after successful signup
//         } else {
//           setIsError(true);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
// <div className={styles.signup_container}>
// 			<div className={styles.signup_form_container}>
// 				<div className={styles.left}>
// 					<h1>Already Have An Account?</h1>
// 					<Link to="/login">
// 						<button type="button" className={styles.white_btn}>
// 							Sign in
// 						</button>
// 					</Link>
// 				</div>

    
      
//         <div className={styles.right}>
//           {isError ? <p>Invalid input</p> : null}
//           <form className={styles.form_container} onSubmit={handleSubmit}>
//             <h1>Sign Up for an Account</h1>
//             <input
//               type="name"
//               placeholder="Enter your Name"
//               name="name"
//               onChange={handleChange}
//               value={data.name}
//               required
//               className={styles.input}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               onChange={handleChange}
//               value={data.email}
//               required
//               className={styles.input}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               onChange={handleChange}
//               value={data.password}
//               required
//               className={styles.input}
//             />
//             <button type="submit" className={styles.green_btn}>
//               Sign Up
//             </button>
//           </form>
//         </div>
//         {/* <div className={styles.right}>
//           <h1>Already Have an Account?</h1>
//           <Link to="/login">
//             <button type="button" className={styles.white_btn}>
//               Log In
//             </button>
//           </Link>
//         </div> */}
    
//     </div>
//     </div>
//   );
// };

// export default Signup;





// import { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import styles from './styles.module.css';

// const Signup = () => {
//   const navigate = useNavigate();
//   const [isError, setIsError] = useState(false);
//   const [data, setData] = useState({ email: '', password: '',name:''});

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//    const handleSubmit = async (e) => {
//     e.preventDefault();

//    await axios.post('http://localhost:5000/signup', data)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data.success) {
//           sessionStorage.setItem("user",res.data);
//           setIsError(false);
//           navigate('/'); // Redirect to the login page after successful signup
//         } else {
//           setIsError(true);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
// <div className={styles.signup_container}>
// 			<div className={styles.signup_form_container}>
// 				<div className={styles.left}>
// 					<h1>Already Have An Account?</h1>
// 					<Link to="/login">
// 						<button type="button" className={styles.white_btn}>
// 							Sign in
// 						</button>
// 					</Link>
// 				</div>

    
      
//         <div className={styles.right}>
//           {isError ? <p>Invalid input</p> : null}
//           <form className={styles.form_container} onSubmit={handleSubmit}>
//             <h1>Sign Up for an Account</h1>
//             <input
//               type="name"
//               placeholder="Enter your Name"
//               name="name"
//               onChange={handleChange}
//               value={data.name}
//               required
//               className={styles.input}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               onChange={handleChange}
//               value={data.email}
//               required
//               className={styles.input}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               onChange={handleChange}
//               value={data.password}
//               required
//               className={styles.input}
//             />
//             <button type="submit" className={styles.green_btn}>
//               Sign Up
//             </button>
//           </form>
//         </div>
//         {/* <div className={styles.right}>
//           <h1>Already Have an Account?</h1>
//           <Link to="/login">
//             <button type="button" className={styles.white_btn}>
//               Log In
//             </button>
//           </Link>
//         </div> */}
    
//     </div>
//     </div>
//   );
// };

// export default Signup;



import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const Signup = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({ email: '', password: '', name: '' });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/signup', data);

      if (res.data.success) {
       
        sessionStorage.setItem("userId", res.data.userId);
        setIsError(false);
        navigate('/');
      } else {
        setIsError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Already Have An Account?</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sign in
            </button>
          </Link>
        </div>

        <div className={styles.right}>
          {isError ? <p>Invalid input</p> : null}
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Sign Up for an Account</h1>
            <input
              type="text" 
              placeholder="Enter your Name"
              name="name"
              onChange={handleChange}
              value={data.name}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            <button type="submit" className={styles.green_btn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;