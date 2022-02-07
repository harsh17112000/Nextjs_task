import React from 'react';
import {useRouter} from "next/router"

const details = () => {

   const history = useRouter();

   const redirect = ()=>{
     history.push("/")
   }

  return <>
      <div className="container d-flex flex-column justify-content-center align-items-center">
          <img src="./404.png" alt="404" style={{width:"400px"}} />
          <p>Error page !</p>
          <button className='btn btn-primary col-lg-6' onClick={()=>redirect()}>Home</button>
      </div>
  </>;
};

export default details;
