import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router"
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Avatar from '@mui/material/Avatar';
import Styles from "../styles/signin.module.css"

const detail = () => {

    const [udata, setudata] = useState([]);
    // console.log(udata);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var todayDate = new Date().toISOString().slice(0, 10);

    const getdata = () => {
        const data = localStorage.getItem("loginuserdata");

        if (data && data.length) {
            const checkeddata = JSON.parse(data)
            setudata(checkeddata[0]);

            const birthday = checkeddata[0].map((e, k) => {
                const j = e.date == todayDate
                return j
            });

            if (birthday) {
                setTimeout(() => {
                    handleShow();
                }, 3000)

            }
        }
    };
    const history = useRouter();

    const redirect = () => {
        history.push("/")
    }

    const logoutuser = () => {
        localStorage.removeItem("loginuserdata");
        history.push("/");
    }

    useEffect(() => {
        getdata()
    }, [])

    return <>
        {
            udata && udata.length ? <div className="container mt-4">
                <button className='btn btn-primary d-block' onClick={() => logoutuser()}>Logout</button>
                <div className=' d-flex justify-content-center align-items-center'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Avatar alt="Remy Sharp"
                                className={Styles.avatar}
                                sx={{ width: 46, height: 46 }}
                            >{udata[0].fname[0].toUpperCase()}</Avatar>
                            <Card.Title>{udata[0].fname.toUpperCase()}</Card.Title>
                            <Card.Text>
                                Email :{udata[0].email}
                            </Card.Text>
                            <Card.Text>
                                Birthday : {udata[0].date}
                            </Card.Text>

                            <button className='btn btn-primary'>Go somewhere</button>
                        </Card.Body>
                    </Card>
                </div>


                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Hey, {udata[0].fname.toUpperCase()}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>🍰 Many Many Happy returns of the day ! </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Done
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
                :
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <img src="./404.png" alt="404" style={{ width: "400px" }} />
                    <h2>We are sorry, Page not Found!</h2>
                    <p>The Page your are looking for might have been removed had its name
                        changed and its temporarly unavailable
                    </p>
                    <button className='btn btn-primary col-lg-6' onClick={() => redirect()}>Home</button>
                </div>
        }
    </>;
};

export default detail;



