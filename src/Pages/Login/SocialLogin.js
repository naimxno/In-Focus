import React from 'react';
import google from "../../Images/Google-Icon-PNG_rwscww.png"
import facebook from "../../Images/834722_facebook_icon.png"

const SocialLogin = () => {
  return (
    <div>
      <div className='d-flex w-50 mx-auto align-items-center'>
        <div style={{ height: "2px" }} className='bg-primary w-50'></div>
        <p className='mt-2 p-2'>Or</p>
        <div style={{ height: "2px" }} className='bg-primary w-50'></div>
      </div>
      <div className='d-flex w-50 mx-auto justify-content-center my-2'>
        <button className='border border-secondary btn btn-white px-5 m-2 '> <img src={google} alt="" /> Google</button>
      </div>
    </div>
  );
};

export default SocialLogin;