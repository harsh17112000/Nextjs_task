import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Link from "next/link"
import Styles from "../styles/signin.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';


const SignUp = () => {

  const [show, setShow] = useState(true);

  const [showcpass, setShowcpass] = useState(true);

  const [signupval, setSignupVal] = useState({
    fname: "",
    email: "",
    date: "",
    password: "",
    cpassword: ""
  });

  const [data, setData] = useState([]);
  console.log(data);

  // console.log(signupval);

  const adddata = () => {

    const { fname, email, date, password, cpassword } = signupval;

    if (fname === "") {
      toast.error(' fname is required!', {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error(' email is required!', {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error(' @ must be includes!', {
        position: "top-center",
      });
    } else if (date === "") {
      toast.error(' @ must be includes!', {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error('Enter your password!', {
        position: "top-center",
      });
    } else if (password.length < 6) {
      toast.error('password must 6 character!', {
        position: "top-center",
      });
    } else if (cpassword === "") {
      toast.error(' enter your confirm password!', {
        position: "top-center",
      });
    } else if (cpassword.length < 6) {
      toast.error('confirm password must 6 character!', {
        position: "top-center",
      });
    } else if (password !== cpassword) {
      toast.error('password and confirm password not match!', {
        position: "top-center",
      });
    } else {
      toast.success('😃 your data successfully added!', {
        position: "top-center",
      });
      setData([...data, signupval]);
      localStorage.setItem("users", JSON.stringify([...data, signupval]))
      setSignupVal({ ...signupval, fname: "", email: "", date: "", password: "", cpassword: "" });
    }

  }


  return <>
    <div className="container">
      <section className='mt-3 col-lg-5 mx-auto'>
        <h1 className='text-center'>Sign up</h1>

        <FloatingLabel
          controlId="floatingInput"
          label="Enter Your Name"
          className="mb-3"
        >
          <Form.Control type="text" name='fname' value={signupval.fname} onChange={(e) => setSignupVal({ ...signupval, fname: e.target.value })} placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" name='email' value={signupval.email} onChange={(e) => setSignupVal({ ...signupval, email: e.target.value })} placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"

          label="Select Your Birth Day"
        >
          <Form.Control type="date" className='mb-3' name='date' value={signupval.date} onChange={(e) => setSignupVal({ ...signupval, date: e.target.value })} placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password" className={Styles.eye_style}>
          <Form.Control type={show ? "password" : "text"} className="mb-3" name='email' value={signupval.password} onChange={(e) => setSignupVal({ ...signupval, password: e.target.value })} placeholder="Password" />
          {
            show ? <AiFillEyeInvisible className={Styles.eye} onClick={() => setShow(!show)} /> :
              <AiFillEye className={Styles.eye} onClick={() => setShow(!show)} />
          }
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Confirm Password" className={Styles.eye_style}>
          <Form.Control type={showcpass ? "password" : "text"} name='cpassword' value={signupval.cpassword} onChange={(e) => setSignupVal({ ...signupval, cpassword: e.target.value })} placeholder="Password" />
          {
            show ? <AiFillEyeInvisible className={Styles.eye} onClick={() => setShowcpass(!showcpass)} /> :
              <AiFillEye className={Styles.eye} onClick={() => setShowcpass(!showcpass)} />
          }
        </FloatingLabel>

        <Form.Group className="mt-3">
          <Form.Check type="checkbox" label="Remember Me" defaultChecked />
        </Form.Group>
        <div className="text-center">
          <button className='btn btn-primary mt-3 col-lg-12 text-center' onClick={() => adddata()}>Register</button>
        </div>
        <p className='mt-3'> Already Have an account <Link href="/">Sign In</Link> </p>
        <ToastContainer />
      </section>
    </div>
  </>;
};

export default SignUp;
