import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Item, ShoppingList } from '../types';

export interface ShoppingListIdRouteParams {
  id: string;
}

const ShoppingListComponent = () => {
  const url =
    'https://gobf8rpbvd.execute-api.us-east-1.amazonaws.com/dev/shoppingLists'; //TODO: read from an environment variable

  const [shoppingList, setShoppingList] = useState<ShoppingList>();

  const { id } = useParams<ShoppingListIdRouteParams>();

  // It is not necessary to do another call here to retrieve a single shopping list data, as we have that data in the first api call on the parent; we'd use Redux in this case and manage a store
  useEffect(() => {
    fetch(`${url}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setShoppingList(data);
      });
  }, []);

  const ShoppingListItems = shoppingList?.items.map((item) => (
    <li key={item.id}>
      {item.name} ({item.price})
    </li>
  ));
  return (
    <div>
      <h1>{shoppingList?.name}</h1>
      <h2>{shoppingList?.description}</h2>
      {ShoppingListItems}
    </div>
  );
};

export default ShoppingListComponent;
