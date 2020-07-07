import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as inventoryActions from "../redux-actions";
import AddInventoryForm from "../formik/AddInventoryForm";

const mapStateToProps = state => ({
  inventoryDetails: state.inventory.inventoryDetails,
  error: state.inventory.error,
  isLoading: state.inventory.isLoading
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(inventoryActions.createInventory, dispatch)
});

const AddInventoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddInventoryForm);

export default AddInventoryContainer;
