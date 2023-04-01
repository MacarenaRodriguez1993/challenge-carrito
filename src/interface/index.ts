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
}

export interface ProductState {
  products: Details[];
  auxiliarProducst: Details[];
  productDetails: Details | null;
  shoppingCart: number;
  isLoading: boolean;
  error: string;
}
