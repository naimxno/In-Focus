import React from 'react';
import { Card, } from 'react-bootstrap';

const Service = (props) => {
  const { name, img, price, description
  } = props.service;
  return (
    <Card>
      <Card.Img className="col" variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <strong>Price: {price} $</strong>
        <Card.Text>{description}This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <button className='border-0 bg-primary p-2 text-white bg-opacity-75'>ok</button>
    </Card>
  );
};

export default Service;