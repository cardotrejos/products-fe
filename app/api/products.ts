import {
  CreateProduct,
  DeleteProduct,
  Products,
  UpdateProduct,
} from "../types/products";
import { fetchWithToken } from "./apiUtils";

export const getAllProducts = async (): Promise<Products> => {
  return await fetchWithToken(`${process.env.NEXT_PUBLIC_BE_API_DEV}/products/`);
};

export const deleteProduct = async (id: number) => {
  return await fetchWithToken(`${process.env.NEXT_PUBLIC_BE_API_DEV}/products/${id}`, {
    method: "DELETE",
  });
};

export const updateProduct = async (id: number, data: UpdateProduct) => {
  return await fetchWithToken(`${process.env.NEXT_PUBLIC_BE_API_DEV}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const createProduct = async (data: CreateProduct) => {
  return await fetchWithToken(`${process.env.NEXT_PUBLIC_BE_API_DEV}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
