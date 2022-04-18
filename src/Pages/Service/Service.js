import React from 'react';
import { Card, } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
  const { id, name, img, price, description
  } = props.service;
  const navigate = useNavigate();
  const navigateToServiceDetail = id => {
    navigate(`/service/${id}`)
  }
  return (
    <Card>
      <Card.Img className="col" variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <strong>Price: {price} $</strong>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <button onClick={() => navigateToServiceDetail(id)} className='border-0 bg-primary p-2 text-white bg-opacity-75'>Learn more</button>
    </Card>
  );
};

export default Service;