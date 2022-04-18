import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Service = ({service}) => {
    const {name,img,description,price} = service
    return (
        <div className="mb-3">
            <Card style={{ width: '18rem' }} className="h-100 mx-auto">
  <Card.Img variant="top" src={img} className="h-100" /> 
  <Card.Body className="h-100"> 
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {description}
    </Card.Text>
    <Card.Text>
     Price : ${price}
    </Card.Text>
      <Link to="/checkout" >
    <Button variant="primary">
      Book now
      </Button>
      </Link>
   
       
  </Card.Body> 
</Card>
        </div>
    );
};

export default Service;