import { all } from "redux-saga/effects";

import { inventorySaga } from "./inventorySaga";
import { inventoryIndexedDBSaga } from "./inventoryIndexedDBSaga";

export default function* rootSaga() {
  yield all([inventorySaga(), inventoryIndexedDBSaga()]);
}
