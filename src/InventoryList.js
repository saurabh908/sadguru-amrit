import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useIndexedDB } from "react-indexed-db";
import ShopItemCard from "./containers/ShopItemCard";

const InventoryList = () => {
  const { getAll } = useIndexedDB("inventory");
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function ShowAll() {
      const allItems = await getAll();
      setItems(allItems);
    }
    ShowAll();
  }, []);

  //console.log(items);

  return (
    <React.Fragment>
      <Container>
        <h1 style={{ color: "forestgreen" }}>Inventory Item Collection</h1>

        {items.map(item => (
          <ShopItemCard key={item.id} props={item} />
        ))}
      </Container>
    </React.Fragment>
  );
};

export default InventoryList;
