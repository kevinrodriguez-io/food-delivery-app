export enum CategoryName {
  Taco = 'Taco',
  Cold = 'Cold',
  Burger = 'Burger',
  Pizza = 'Pizza',
  Burrito = 'Burrito',
}

export type Category = {
  name: CategoryName
  color: string
}
