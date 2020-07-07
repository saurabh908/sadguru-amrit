import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as inventoryActions from "../redux-actions";

class HomeComponent extends React.Component {
  render() {
    const { actions, error, isLoading } = this.props;

    return (
      <div>
        {error && <h3>Error: {error.response}</h3>}
        {isLoading ? (
          <h1>Loading ...</h1>
        ) : (
          <div>
            <h1>Search Inventory</h1>
            <input type="text" name="Inventory" />
            &nbsp;
            <button type="button" onClick={() => actions.getInventory("1")}>
              Get Inventory
            </button>
            &nbsp;
            <button type="button" onClick={() => actions.getInventories()}>
              Get Inventory Collections
            </button>
            &nbsp;
            <button type="button" onClick={() => actions.deleteInventory("69")}>
              Delete Inventory
            </button>
          </div>
        )}
      </div>
    );
  }
}

HomeComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  items: PropTypes.object,
  error: PropTypes.object
};

const mapStateToProps = state => ({
  items: state.inventoryReducers.items,
  error: state.inventoryReducers.error,
  isLoading: state.inventoryReducers.isLoading
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(inventoryActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
