import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams()
  return (
    <div>
      <h1 className='text-center m-2'>ServiceDetail : {serviceId}</h1>
      <Link className='text-decoration-none' to='/checkout'>
        <button className='btn btn-success mx-auto m-5 d-block '>Proceed checkout</button></Link>
    </div>
  );
};

export default ServiceDetail;