import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router"
import Card from 'react-bootstrap/Card'
import Avatar from '@mui/material/Avatar';
import Styles from "../styles/signin.module.css"

const detail = () => {

    const [udata, setudata] = useState([]);
    // console.log(udata);

    const getdata = () => {
        const data = localStorage.getItem("loginuserdata");

        if (data && data.length) {
            const checkeddata = JSON.parse(data)
            setudata(checkeddata[0]);
        }
    };
    const history = useRouter();

    const redirect = () => {
        history.push("/")
    }

    const logoutuser = ()=>{
        localStorage.removeItem("loginuserdata");
        history.push("/");
    }

    useEffect(() => {
        getdata()
    }, [])

    return <>
        {
            udata && udata.length ? <div className="container mt-4">
                <button className='btn btn-primary d-block' onClick={()=>logoutuser()}>Logout</button>
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

            </div>
                :
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <img src="./404.png" alt="404" style={{ width: "400px" }} />
                    <p>Error page !</p>
                    <button className='btn btn-primary col-lg-6' onClick={() => redirect()}>Home</button>
                </div>
        }
    </>;
};

export default detail;
