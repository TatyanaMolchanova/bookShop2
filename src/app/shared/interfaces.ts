export interface BookModel {
  id: number;
  name: string;
  description: string;
  price: number;
  category: BookCategory;
  createDate: Date;
  isAvailable: boolean;
  howMuchIsAddedToCart: number;
}

export enum BookCategory {
  Fiction = 'Fiction',
  Fantastic = 'Fantastic',
  Classic = 'Classic',
  Psychology = 'Psychology',
  IT = 'IT',
  Childish = 'Childish'
}

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}
