import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams()
  return (
    <div>
      <h1>ServiceDetail : {serviceId}</h1>
      <Link to='/checkout'><button>Proceed checkout</button></Link>
    </div>
  );
};

export default ServiceDetail;