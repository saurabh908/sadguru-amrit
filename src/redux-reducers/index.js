import { combineReducers } from "redux";

import inventoryReducers from "./inventoryReducers";
import inventoryIndexedDBReducers from "./inventoryIndexedDBReducers";

export default combineReducers({
  inventoryReducers,
  inventoryIndexedDBReducers
});
