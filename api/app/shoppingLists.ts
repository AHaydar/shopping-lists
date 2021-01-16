interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
  unit: string;
}

interface ShoppingList {
  id: string;
  name: string;
  description: string;
  items: Item[];
}

const shoppingLists: ShoppingList[] = [
  {
    id: "LIST#1",
    name: "Awesome things",
    description:
      "shopping list containing awesome things that everybody wants to buy",
    items: [
      {
        id: "ITEM#1",
        name: "Banana",
        price: 5,
        quantity: 1,
        unit: "kg",
      },
      {
        id: "ITEM#2",
        name: "Oat",
        price: 3.2,
        quantity: 1,
        unit: "kg",
      },
      {
        id: "ITEM#3",
        name: "Frozen cherries",
        price: 6.1,
        quantity: 1,
        unit: "box",
      },
      {
        id: "ITEM#4",
        name: "Frozen berries",
        price: 6.4,
        quantity: 1,
        unit: "box",
      },
      {
        id: "ITEM#5",
        name: "Cinamon",
        price: 6.4,
        quantity: 1,
        unit: "item",
      },
    ],
  },
  {
    id: "LIST#2",
    name: "Entertainment",
    description: "shopping list containing things I want for entertainment",
    items: [
      {
        id: "ITEM#6",
        name: "Play Station 5",
        price: 500,
        quantity: 1,
        unit: "item",
      },
      {
        id: "ITEM#7",
        name: "Catan Board Game",
        price: 80,
        quantity: 1,
        unit: "item",
      },
      {
        id: "ITEM#8",
        name: "Chess Board",
        price: 451,
        quantity: 1,
        unit: "item",
      },
    ],
  },
];

// TODO: update this function to read from a proper data source (e.g. dynamodb)
export const retrieveShoppingLists = (): ShoppingList[] => {
  return shoppingLists;
};
