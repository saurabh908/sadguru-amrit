import * as types from "./actionTypes";

export function getInventory(id) {
  return { type: types.GET_INVENTORY_ITEM, id };
}

export function createInventory(item) {
  return { type: types.CREATE_INVENTORY_ITEM, item };
}

export function updateInventory(item, id) {
  return { type: types.UPDATE_INVENTORY_ITEM, item, id };
}

export function deleteInventory(id) {
  return { type: types.DELETE_INVENTORY_ITEM, id };
}

export function getInventories() {
  return { type: types.GET_INVENTORY_ITEMS };
}

export function getIndexedDBInventory(id) {
  return { type: types.GET_INDEXED_DB_INVENTORY_ITEM, id };
}

export function getIndexedDBInventoryByIndex(indexName, key) {
  return { type: types.GET_INDEXED_DB_BY_INDEX_INVENTORY_ITEM, indexName, key };
}

export function createIndexedDBInventory(item) {
  return { type: types.CREATE_INDEXED_DB_INVENTORY_ITEM, item };
}

export function updateIndexedDBInventory(item, id) {
  return { type: types.UPDATE_INDEXED_DB_INVENTORY_ITEM, item, id };
}

export function deleteIndexedDBInventory(id) {
  return { type: types.DELETE_INDEXED_DB_INVENTORY_ITEM, id };
}

export function getIndexedDBInventories() {
  return { type: types.GET_INDEXED_DB_INVENTORY_ITEMS };
}

export function clearIndexedDBInventories() {
  return { type: types.CLEAR_INDEXED_DB_INVENTORY_ITEMS };
}
