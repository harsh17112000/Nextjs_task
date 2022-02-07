import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Link from "next/link"
import Styles from "../styles/signin.module.css"
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from "next/router"

const Signin = () => {

    const [show, setShow] = useState(true);

    const history = useRouter();

    const [signval, setSignVal] = useState({
        email: "",
        password: ""
    });

    // console.log(signval);
    const [data, setData] = useState([]);

    const adddata = () => {

        let userdata = localStorage.getItem("users");
        const checkdata = JSON.parse(userdata);
        // console.log(checkdata);

        const { email, password } = signval;

        if (email === "") {
            toast.error(' email is required!', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
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
        } else {
            const validate = checkdata.filter((element,k)=>{
                return element.email == email && element.password == password
            });
            // console.log(validate)

            if (validate.length === 0) {
                toast.error('invalid details!', {
                    position: "top-center",
                });
            } else {
                toast.success('😃 your data successfully added!', {
                    position: "top-center",
                });
                setData([...data, signval]);
                localStorage.setItem("loginuserdata", JSON.stringify([...data, validate]));
                history.push("/detail");
                setSignVal({ ...signval, email: "", password: "" });
            }

        }

    }


    return <>
        <div className="container">
            <section className='mt-3 col-lg-5 mx-auto'>
                <h1 className='text-center'>Sign In</h1>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" name='email' value={signval.email} onChange={(e) => setSignVal({ ...signval, email: e.target.value })} placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className={Styles.eye_style}>
                    <Form.Control type={show ? "password" : "text"} name='email' value={signval.password} onChange={(e) => setSignVal({ ...signval, password: e.target.value })} placeholder="Password" />
                    {
                        show ? <AiFillEyeInvisible className={Styles.eye} onClick={() => setShow(!show)} /> :
                            <AiFillEye className={Styles.eye} onClick={() => setShow(!show)} />
                    }
                </FloatingLabel>
                <Form.Group className="mt-3">
                    <Form.Check type="checkbox" label="Remember Me" defaultChecked />
                </Form.Group>
                <div className="text-center">
                    <button className='btn btn-primary mt-3 col-lg-12 text-center'
                        onClick={() => adddata()}
                    >Login</button>
                </div>
                <p className='mt-3'>Create Your New Account  <Link href="/signup">Sign Up</Link> </p>
                <ToastContainer />
            </section>
        </div>
    </>;
};

export default Signin;
