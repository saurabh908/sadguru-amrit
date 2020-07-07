import React from "react";
import { Container } from "react-bootstrap";

import ItemCard from "./ItemCard";

const Items = () => {
  return (
    <div>
      <Container>
        {/* <h2 style={{ color: "forestgreen" }}>Inventory Item Collection</h2> */}
        &nbsp;
        <ItemCard />
      </Container>
    </div>
  );
};

export default Items;
