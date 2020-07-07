import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as inventoryActions from "../redux-actions";

import Items from "../components/Items";

const mapStateToProps = state => ({
  items: state.inventoryIndexedDBReducers.items,
  error: state.inventoryIndexedDBReducers.error,
  isLoading: state.inventoryIndexedDBReducers.isLoading
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(inventoryActions, dispatch)
});

const ItemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);

export default ItemsContainer;
