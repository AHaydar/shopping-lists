import { getResponseHeaders } from "./headers";
import { retrieveShoppingLists } from "./shoppingLists";

export const getShoppingLists = async () => {
  const results = {
    statusCode: 200,
    headers: getResponseHeaders(),
    body: JSON.stringify(retrieveShoppingLists()),
  };
  return results;
};
export const getSingleShoppingList = async (event: any) => {
  const { id } = event.pathParameters;
  const shoppingLists = retrieveShoppingLists();
  const shoppingList = shoppingLists.filter(
    (shoppingList) => shoppingList.id.split("#")[1] === id
  );
  const results = {
    statusCode: 200,
    headers: getResponseHeaders(),
    body: JSON.stringify(shoppingList[0]),
  };
  return results;
};

export const createOrUpdateShoppingList = async () => {
  throw new Error("Method not implemented");
};

export const deleteShoppingList = async () => {
  throw new Error("Method not implemented");
};
