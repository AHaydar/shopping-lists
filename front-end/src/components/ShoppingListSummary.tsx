import React from 'react';
import { Link } from 'react-router-dom';
import './ShoppingListSummary.css';

type shoppingListSummaryProps = {
  shoppingListId: string;
  shoppingListName: string;
  itemsNumber: number;
};

const ShoppingListSummary = ({
  shoppingListId,
  shoppingListName,
  itemsNumber,
}: shoppingListSummaryProps) => {
  return (
    <li>
      <Link to={shoppingListId}>
        <div className="shopping-list-summary">
          {shoppingListName} ({itemsNumber} items)
        </div>
      </Link>
    </li>
  );
};

export default ShoppingListSummary;
