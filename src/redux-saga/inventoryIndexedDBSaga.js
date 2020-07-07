import { put, takeLatest, all, takeEvery } from "redux-saga/effects";
import * as types from "../redux-actions/actionTypes";
import { useIndexedDB } from "react-indexed-db";

const {
  getByID,
  getAll,
  getByIndex,
  add,
  update,
  deleteRecord,
  clear
} = useIndexedDB("inventory");

function* createInventory(action) {
  //console.log(action);
  try {
    const {
      avatar,
      createdAt,
      description,
      name,
      price,
      isActive,
      imageUrl
    } = action.item;
    const items = yield add({
      name: name,
      description: description,
      price: price,
      imageUrl: imageUrl,
      avatar: avatar,
      createdAt: createdAt,
      isActive: isActive
    });
    yield put({
      type: types.CREATE_INDEXED_DB_INVENTORY_ITEM_SUCCESS,
      data: items
    });
  } catch (error) {
    yield put({
      type: types.CREATE_INDEXED_DB_INVENTORY_ITEM_FAILED,
      error: error
    });
  }
}

function* deleteInventory(action) {
  try {
    const { id } = action;

    const items = yield deleteRecord(id);
    yield put({
      type: types.DELETE_INDEXED_DB_INVENTORY_ITEM_SUCCESS,
      data: items
    });
  } catch (error) {
    yield put({
      type: types.DELETE_INDEXED_DB_INVENTORY_ITEM_FAILED,
      error: error
    });
  }
}

function* updateInventory(action) {
  try {
    const { item, id } = action;
    // console.log(action);
    const items = yield update({ id: id, name: item });
    yield put({
      type: types.UPDATE_INDEXED_DB_INVENTORY_ITEM_SUCCESS,
      data: items
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_INDEXED_DB_INVENTORY_ITEM_FAILED,
      error: error
    });
  }
}

function* fetchInventoryByID(action) {
  try {
    const { id } = action;
    const items = yield getByID(id);
    yield put({
      type: types.GET_INDEXED_DB_INVENTORY_ITEM_SUCCESS,
      data: items
    });
  } catch (error) {
    yield put({
      type: types.GET_INDEXED_DB_INVENTORY_ITEM__FAILED,
      error: error
    });
  }
}

function* fetchInventoryByIndex(action) {
  try {
    const { indexName, key } = action;
    console.log(action);
    const items = yield getByIndex(indexName, key);
    yield put({
      type: types.GET_INDEXED_DB_BY_INDEX_INVENTORY_ITEM_SUCCESS,
      data: items
    });
  } catch (error) {
    yield put({
      type: types.GET_INDEXED_DB_BY_INDEX_INVENTORY_ITEM__FAILED,
      error: error
    });
  }
}

function* fetchInventories() {
  try {
    const items = yield getAll();
    //console.log(items);
    yield put({
      type: types.GET_INDEXED_DB_INVENTORY_ITEMS_SUCCESS,
      data: items
    });
  } catch (error) {
    yield put({
      type: types.GET_INDEXED_DB_INVENTORY_ITEMS__FAILED,
      error: error
    });
  }
}

function* clearInventories() {
  try {
    const items = yield clear();
    yield put({ type: types.CLEAR_INDEXED_DB_INVENTORY_ITEMS_SUCCESS, items });
  } catch (error) {
    yield put({
      type: types.CREATE_INDEXED_DB_INVENTORY_ITEM_FAILED,
      error: error
    });
  }
}

export function* inventoryIndexedDBSaga() {
  yield all([
    takeLatest(types.GET_INDEXED_DB_INVENTORY_ITEM, fetchInventoryByID),
    takeLatest(
      types.GET_INDEXED_DB_BY_INDEX_INVENTORY_ITEM,
      fetchInventoryByIndex
    ),
    takeLatest(types.CREATE_INDEXED_DB_INVENTORY_ITEM, createInventory),
    takeLatest(types.UPDATE_INDEXED_DB_INVENTORY_ITEM, updateInventory),
    takeLatest(types.DELETE_INDEXED_DB_INVENTORY_ITEM, deleteInventory),
    takeEvery(types.GET_INDEXED_DB_INVENTORY_ITEMS, fetchInventories),
    takeLatest(types.CLEAR_INDEXED_DB_INVENTORY_ITEMS, clearInventories)
  ]);
}

// import { useIndexedDB } from "react-indexed-db";

// const { getAll } = useIndexedDB("inventory");

// function* fetchInventory() {
//   const data = yield getAll();
//   yield put({ type: "INVENTORY_RECEIVED", json: data });
// }
// function* actionWatcher() {
//   yield takeLatest("GET_INVENTORY", fetchInventory);
// }
// export default function* rootSaga() {
//   yield all([actionWatcher()]);
// }
