import React from "react";
import { Card, Button } from "react-bootstrap";

const ShopItemCard = ({ props }) => {
  return (
    <React.Fragment>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.avatar} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">View Details</Button>
        </Card.Body>
      </Card>
      &nbsp;
    </React.Fragment>
  );
};

export default ShopItemCard;
