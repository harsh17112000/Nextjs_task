import React from 'react';
import { useRouter } from "next/router"

const details = () => {

  const history = useRouter();

  const redirect = () => {
    history.push("/")
  }

  return <>
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <img src="./404.png" alt="404" style={{ width: "400px" }} />
      <h1>404</h1>
      <h2>We are sorry, Page not Found!</h2>
      <p>The Page your are looking for might have been removed had its name
        changed and its temporarly unavailable
      </p>
      <button className='btn btn-primary col-lg-6' onClick={() => redirect()}>Home</button>
    </div>
  </>;
};

export default details;
