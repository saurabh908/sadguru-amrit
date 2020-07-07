import { put, takeLatest, takeEvery, all } from "redux-saga/effects";
import * as types from "../redux-actions/actionTypes";
import { API_BASE_URL, ENDPOINTS } from "../constants/apiEndpoints";
import axios from "axios";

const mockApiUrl = API_BASE_URL + ENDPOINTS;

function* createInventory(action) {
  try {
    const { item } = action;
    const items = yield axios
      .post(`${mockApiUrl}`, item)
      .then(response => response.data);
    yield put({
      type: types.CREATE_INVENTORY_ITEM_SUCCESS,
      data: items
    });
  } catch (error) {
    yield put({ type: types.CREATE_INVENTORY_ITEM_FAILED, error });
  }
}

function* deleteInventory(action) {
  try {
    const { id } = action;

    const items = yield axios
      .delete(`${mockApiUrl}/${id}`)
      .then(response => response.data);
    yield put({
      type: types.DELETE_INVENTORY_ITEM_SUCCESS,
      data: items
    });
  } catch (error) {
    yield put({ type: types.DELETE_INVENTORY_ITEM_FAILED, error });
  }
}

function* updateInventory(action) {
  try {
    const { item, id } = action;
    const items = yield axios
      .patch(`${mockApiUrl}/${id}`, item)
      .then(response => response.data);
    yield put({
      type: types.UPDATE_INVENTORY_ITEM_SUCCESS,
      data: items
    });
  } catch (error) {
    yield put({ type: types.UPDATE_INVENTORY_ITEM_FAILED, error });
  }
}

function* fetchInventory(action) {
  try {
    const { id } = action;
    const items = yield axios
      .get(`${mockApiUrl}/${id}`)
      .then(response => response.data);
    yield put({
      type: types.GET_INVENTORY_ITEM_SUCCESS,
      data: items
    });
  } catch (error) {
    yield put({ type: types.GET_INVENTORY_ITEM__FAILED, error });
  }
}

function* fetchInventories() {
  try {
    const items = yield axios
      .get(`${mockApiUrl}`)
      .then(response => response.data);
    yield put({ type: types.GET_INVENTORY_ITEMS_SUCCESS, items });
  } catch (error) {
    yield put({ type: types.GET_INVENTORY_ITEMS__FAILED, error });
  }
}

// function* inventoryWatcher() {
//   const inventoryChannel = yield actionChannel(types.GET_INVENTORY_ITEM);
//   while (true) {
//     const action = yield take(inventoryChannel);
//     yield call(fetchInventory, action);
//   }
// }

export function* inventorySaga() {
  yield all([
    takeLatest(types.CREATE_INVENTORY_ITEM, createInventory),
    takeLatest(types.UPDATE_INVENTORY_ITEM, updateInventory),
    takeEvery(types.GET_INVENTORY_ITEMS, fetchInventories),
    takeLatest(types.GET_INVENTORY_ITEM, fetchInventory),
    takeLatest(types.DELETE_INVENTORY_ITEM, deleteInventory)
  ]);
}
