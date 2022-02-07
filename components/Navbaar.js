import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Link from 'next/link';
import Styles from "../styles/signin.module.css"

const Navbaar = () => {
    return <>
        <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
            <div className="container">
                <Navbar.Brand >
                    <Link href="/">
                        <a className={Styles.heading}>User management</a></Link>
                </Navbar.Brand>
            </div>
        </Navbar>
    </>;
};

export default Navbaar;
