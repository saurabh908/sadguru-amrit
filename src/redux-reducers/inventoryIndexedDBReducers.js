import * as types from "../redux-actions/actionTypes";

export default function inventoryIndexedDBReducer(
  state = { isLoading: false },
  action = null
) {
  switch (action.type) {
    case types.GET_INDEXED_DB_INVENTORY_ITEM:
    case types.CREATE_INDEXED_DB_INVENTORY_ITEM:
    case types.UPDATE_INDEXED_DB_INVENTORY_ITEM:
    case types.DELETE_INDEXED_DB_INVENTORY_ITEM:
    case types.GET_INDEXED_DB_INVENTORY_ITEMS:
    case types.GET_INDEXED_DB_BY_INDEX_INVENTORY_ITEM:
    case types.CLEAR_INDEXED_DB_INVENTORY_ITEMS:
      return { ...state, isLoading: true };

    case types.GET_INDEXED_DB_INVENTORY_ITEM_SUCCESS:
    case types.CREATE_INDEXED_DB_INVENTORY_ITEM_SUCCESS:
    case types.UPDATE_INDEXED_DB_INVENTORY_ITEM_SUCCESS:
    case types.DELETE_INDEXED_DB_INVENTORY_ITEM_SUCCESS:
    case types.GET_INDEXED_DB_INVENTORY_ITEMS_SUCCESS:
    case types.GET_INDEXED_DB_BY_INDEX_INVENTORY_ITEM_SUCCESS:
    case types.CLEAR_INDEXED_DB_INVENTORY_ITEMS_SUCCESS:
      return { ...state, isLoading: false, items: action.data };

    case types.GET_INDEXED_DB_INVENTORY_ITEM__FAILED:
    case types.CREATE_INDEXED_DB_INVENTORY_ITEM_FAILED:
    case types.UPDATE_INDEXED_DB_INVENTORY_ITEM_FAILED:
    case types.DELETE_INDEXED_DB_INVENTORY_ITEM_FAILED:
    case types.GET_INDEXED_DB_INVENTORY_ITEMS__FAILED:
    case types.GET_INDEXED_DB_BY_INDEX_INVENTORY_ITEM__FAILED:
    case types.CLEAR_INDEXED_DB_INVENTORY_ITEMS__FAILED:
      return { ...state, isLoading: false, error: action.error };

    default:
      return state;
  }
}
