import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as inventoryActions from "../redux-actions";
import AddItemForm from "../components/AddItemForm";

const mapStateToProps = state => ({
  items: state.inventoryIndexedDBReducers.items,
  error: state.inventoryIndexedDBReducers.error,
  isLoading: state.inventoryIndexedDBReducers.isLoading
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(inventoryActions, dispatch)
});

const AddItemFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItemForm);

export default AddItemFormContainer;
