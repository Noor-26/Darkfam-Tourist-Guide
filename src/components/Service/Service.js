import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Service = ({service}) => {
    const {name,img,description,price} = service
    const notify = () => toast("Wow so easy!");
    return (
        <div className="">
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