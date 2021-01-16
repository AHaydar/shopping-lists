import React, { useEffect, useState } from 'react';
import ShoppingListSummary from './ShoppingListSummary';
import { ShoppingList, Item } from '../types';

const Home = () => {
  const url =
    'https://gobf8rpbvd.execute-api.us-east-1.amazonaws.com/dev/shoppingLists'; //TODO: read from an environment variable

  const [shoppingLists, setShoppingLists] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setShoppingLists(data);
      });
  }, []);

  const ShoppingLists = shoppingLists.map((shoppingList: ShoppingList) => {
    const shoppingListId = shoppingList.id.split('#')[1];
    return (
      <ShoppingListSummary
        key={shoppingListId}
        shoppingListId={shoppingListId}
        shoppingListName={shoppingList.name}
        itemsNumber={shoppingList.items.length}
      />
    );
  });

  return (
    <div className="app">
      <h1>Awesome shopping lists</h1>
      <ul className="shopping-lists-container">{ShoppingLists}</ul>
    </div>
  );
};

export default Home;
