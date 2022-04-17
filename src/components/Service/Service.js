import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({service}) => {
    const {name,img,description,price} = service
    return (
        <div>
            <Card style={{ width: '18rem' }} className="h-100">
  <Card.Img variant="top" src={img} className="h-100" /> 
  <Card.Body className="h-100"> 
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {description}
    </Card.Text>
    <Button variant="primary">Book now</Button>
  </Card.Body> 
</Card>
        </div>
    );
};

export default Service;