import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as inventoryActions from "../redux-actions";

import ItemCard from "../components/ItemCard";

const mapStateToProps = state => ({
  items: state.inventoryIndexedDBReducers.items,
  error: state.inventoryIndexedDBReducers.error,
  isLoading: state.inventoryIndexedDBReducers.isLoading
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(inventoryActions, dispatch)
});

const ItemCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCard);

export default ItemCardContainer;
