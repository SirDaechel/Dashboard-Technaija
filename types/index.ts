type TOrders = {
  _id: string;
  orderId: string;
  firstname: string;
  lastname: string;
  email: string;
  amount: number;
  products: {
    _id: string;
    name: string;
    price: number;
    quantity: number;
    photo: string;
    model: string;
    user: string;
    category: string;
  }[];
  date: string;
  status: string;
  channel: string;
  userId: string;
  userPhoto: string;
};

type getOrdersParams = {
  limit: number;
  page?: number;
  status?: string;
};

type getCustomersParams = {
  limit: number;
};

type getProductParams = {
  limit: number;
  page?: number;
};

type deleteProductsParams = {
  products: { id: string; checked?: boolean }[];
  path?: string;
};

type TProduct = {
  _id: string;
  name: string;
  price: number;
  sales_price?: number;
  short_description?: string;
  description: string;
  reviews?: {
    _id?: string;
    user: string;
    email: string;
    date: string;
    comment: string;
    rating: number;
    saveDetails: boolean;
  }[];
  sku?: string;
  additional_information?: {
    model?: {
      id: string;
      text: string;
    }[];
  };
  category: string;
  original_category: string;
  gallery?: {
    id: string;
    image: string;
  }[];
  featured_image: string;
};
