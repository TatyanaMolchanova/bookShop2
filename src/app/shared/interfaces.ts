export interface BookModel {
  id: number;
  name: string;
  description: string;
  price: number;
  category: BookCategory;
  createDate: Date;
  // createDate: number;
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

export interface ConfigOptions {
  id: number;
  login: string;
  email: string;
}
