export interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
  unit: string;
}

export interface ShoppingList {
  id: string;
  name: string;
  description: string;
  items: Item[];
}
