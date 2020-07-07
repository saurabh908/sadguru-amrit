import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as inventoryActions from "../redux-actions";
import AddShopForm from "../AddShopForm";

class HomeComponentWithIndexedDB extends React.Component {
  render() {
    const { actions, error, isLoading } = this.props;

    return (
      <div>
        {error && <h3>Error: {error.response}</h3>}
        {isLoading ? (
          <h1>Loading ...</h1>
        ) : (
          <div>
            <h1>Search IndexedDB Inventory</h1>
            <input type="text" name="Inventory" />
            &nbsp;
            <button
              type="button"
              onClick={() => actions.getIndexedDBInventory("1")}
            >
              Get Inventory
            </button>
            &nbsp;
            <button
              type="button"
              onClick={() => actions.getIndexedDBInventories()}
            >
              Get Inventory Collections
            </button>
            &nbsp;
            <button
              type="button"
              onClick={() => actions.deleteIndexedDBInventory(2)}
            >
              Delete Inventory
            </button>
            &nbsp;
            <button
              type="button"
              onClick={() => actions.clearIndexedDBInventories()}
            >
              Clear Inventory
            </button>
            &nbsp;
            <button
              type="button"
              onClick={() =>
                actions.getIndexedDBInventoryByIndex("name", "item3")
              }
            >
              Get Detail By Index
            </button>
            &nbsp;
            <button
              type="button"
              onClick={() =>
                actions.updateIndexedDBInventory("item2_updated", 2)
              }
            >
              Update Item
            </button>
            &nbsp;
            <AddShopForm />
          </div>
        )}
      </div>
    );
  }
}

HomeComponentWithIndexedDB.propTypes = {
  actions: PropTypes.object.isRequired,
  items: PropTypes.object,
  error: PropTypes.object
};

const mapStateToProps = state => ({
  items: state.inventoryIndexedDBReducers.items,
  error: state.inventoryIndexedDBReducers.error,
  isLoading: state.inventoryIndexedDBReducers.isLoading
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(inventoryActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponentWithIndexedDB);
