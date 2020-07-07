import React, { Component } from "react";
import { Container } from "react-bootstrap";

import ItemCardContainer from "../containers/ItemCardContainer";

class Items extends Component {
  render() {
    return (
      <div>
        <Container>
          {/* <h2 style={{ color: "forestgreen" }}>Inventory Item Collection</h2> */}
          &nbsp;
          <ItemCardContainer />
        </Container>
      </div>
    );
  }
}

const Items1 = ({ inventories }) => {
  //console.log(actions);
  console.log(inventories);
  //const data = actions.getIndexedDBInventories();
  //console.log(data);
  return (
    <div>
      <Container>
        {/* <h2 style={{ color: "forestgreen" }}>Inventory Item Collection</h2> */}
        &nbsp;
        <ItemCardContainer />
      </Container>
    </div>
  );
};

export default Items;
