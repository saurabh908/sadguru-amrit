export const DBConfig = {
  name: "InventoryDB",
  version: 1,
  objectStoresMeta: [
    {
      store: "inventory",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "createdAt", keypath: "createdAt", options: { unique: false } },
        { name: "price", keypath: "price", options: { unique: false } },
        {
          name: "description",
          keypath: "description",
          options: { unique: false }
        },

        { name: "avatar", keypath: "avatar", options: { unique: false } },
        { name: "name", keypath: "name", options: { unique: false } },
        { name: "isActive", keyPath: "isActive", options: { unique: false } },
        { name: "imageUrl", keyPath: "imageUrl", options: { unique: false } }
      ]
    }
  ]
};
