import jumboStores from "../jumbo-store-data.json";

export default defineEventHandler((event) => {
  if (event.context.params === undefined) {
    // TODO: Handle not found
    throw new Error("Store not found");
  }

  const store = jumboStores.stores.find(
    (store) => store.storeId === event.context.params?.id
  );

  return store;
});
