import {BookCategory, BookModel} from "./interfaces";

export const BOOKS: BookModel[] = [
  {
    id: 1,
    name: 'JavaScript',
    description: 'Programming language',
    price: 1000,
    category: BookCategory.IT,
    createDate: new Date(2020, 2, 2),
    isAvailable: true,
    howMuchIsAddedToCart: 0
  },
  {
    id: 2,
    name: 'ABC',
    description: 'ABC for children',
    price: 500,
    category: BookCategory.Childish,
    createDate: new Date(2021, 6, 14),
    isAvailable: true,
    howMuchIsAddedToCart: 0
  },
  {
    id: 0,
    name: 'King Lion',
    description: 'Fairy Tail for children',
    price: 300,
    category: BookCategory.Childish,
    createDate: new Date(2019, 9, 30),
    isAvailable: true,
    howMuchIsAddedToCart: 0
  },
  {
    id: 3,
    name: 'Really love',
    description: 'Fairy Tail for adults',
    price: 100,
    category: BookCategory.Fiction,
    createDate: new Date(2021, 6, 14),
    // createDate: 14,
    isAvailable: false,
    howMuchIsAddedToCart: 0
  }
];
