import React from "react";
import { Accordion, Card, useAccordionToggle } from "react-bootstrap";

import AddItemForm from "./AddItemForm";
import Items from "./Items";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: "pink" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const Inventory = () => {
  return (
    <React.Fragment>
      <Accordion defaultActiveKey="1">
        <Card>
          <Card.Header style={{ backgroundColor: "deepskyblue" }}>
            <CustomToggle eventKey="0">Add Item</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <AddItemForm />
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="1"
            style={{ backgroundColor: "deepskyblue" }}
          >
            Click to View Inventory Items
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Items />
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </React.Fragment>
  );
};

export default Inventory;

// <Accordion defaultActiveKey="1">
//         <Card>
//           <Accordion.Toggle
//             as={Card.Header}
//             eventKey="0"
//             style={{ backgroundColor: "deepskyblue" }}
//           >
//             Click to Add New Item
//           </Accordion.Toggle>
//           <Accordion.Collapse eventKey="0">
//             <AddItemForm />
//           </Accordion.Collapse>
//         </Card>
//         <Card>
//           <Accordion.Toggle
//             as={Card.Header}
//             eventKey="1"
//             style={{ backgroundColor: "deepskyblue" }}
//           >
//             Click to View Inventory Items
//           </Accordion.Toggle>
//           <Accordion.Collapse eventKey="1">
//             <Items />
//           </Accordion.Collapse>
//         </Card>
//       </Accordion>
