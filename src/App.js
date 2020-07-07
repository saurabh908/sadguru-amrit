import React from "react";
import "./styles.css";
import { Container, Jumbotron } from "react-bootstrap";
import { initDB } from "react-indexed-db";

import { DBConfig } from "./database";

import Inventory from "./components/Inventory";

//import InventoryList from "./InventoryList";
//import { AddInventoryContainer } from "./containers/AddInventoryContainer";
//import AddShopForm from "./AddShopForm";

// import HomeComponent from "./components/HomeComponent";
// import HomeComponentWithIndexedDB from "./components/HomeComponentWithIndexedDB";

initDB(DBConfig);

const App = () => {
  return (
    <Container>
      <Jumbotron>
        {" "}
        <h1 style={{ fontStyle: "italic", color: "grey" }} className="header">
          Sadguru's Amrit-Tulya - Tea Shop
        </h1>
        &nbsp;
        {/* <AddInventoryContainer /> */}
        <Inventory />
        &nbsp;
        {/* <FormExample /> */}
        {/* <InventoryList /> */}
        {/* <HomeComponent />
        &nbsp;
        <HomeComponentWithIndexedDB /> */}
        &nbsp;
      </Jumbotron>
    </Container>
  );
};

export default App;
