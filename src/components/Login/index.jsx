// import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import styles from "./styles.module.css";

// const Login = () => {
// 	const [data, setData] = useState({ email: "", password: "" });
// 	const [error, setError] = useState("");

// 	const handleChange = ({ currentTarget: input }) => {
// 		setData({ ...data, [input.name]: input.value });
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const url = "http://localhost:5000/login";
// 			const { data: res } = await axios.post(url, data);
// 			localStorage.setItem("token", res.data);
// 			window.location = "/";
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
// 		<div className={styles.login_container}>
// 			<div className={styles.login_form_container}>
// 				<div className={styles.left}>
// 					<form className={styles.form_container} onSubmit={handleSubmit}>
// 						<h1>Login to Your Account</h1>
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
// 							Sign In
// 						</button>
// 					</form>
// 				</div>
// 				<div className={styles.right}>
// 					<h1>New Here ?</h1>
// 					<Link to="/signup">
// 						<button type="button" className={styles.white_btn}>
// 							Sign Up
// 						</button>
// 					</Link>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Login;



import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import styles from './styles.module.css';

const Login = () => {
  const [pole, setpole] = useState(true);
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const [data1, setData] = useState({  email: '', password: '' });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data1, [input.name]: input.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/login', data1)
      .then((res) => {
        console.log(res.data);
        // Check the response from the server and navigate accordingly
        if (res.data.success) {
          // Adjust this line based on the structure of your user data
          sessionStorage.setItem("userId", res.data.userId);
          setIsError(false);
          navigate('/');
        } else {
          setIsError(true);
          setpole(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setpole(false);
      });
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data1.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data1.password}
              required
              className={styles.input}
            />
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
            {pole ? null : <p style={{ color: "red" }}>Invalid input</p>}
          </form>
        </div>
        <div className={styles.right}>
          <h1 style={{color:"white"}}>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;