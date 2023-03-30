export interface Details {
  _id?: string;
  name?: string;
  img?: string;
  price?: number;
  description?: string;
  stock?: string | null;
  category?: string;
  deleted?: boolean;
  reviews_ids?: Array<any>;
}
export interface Pruducto {
  products: Details[];
  newProduct: Details;
}
