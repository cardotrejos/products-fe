import {
  CreateProduct,
  DeleteProduct,
  Products,
  UpdateProduct,
} from "../types/products";
import { fetchWithToken } from "./apiUtils";

export const getAllProducts = async (): Promise<Products> => {
  return await fetchWithToken("http://localhost:3000/products");
};

export const deleteProduct = async (id: number) => {
  const token = Cookies.get("token");

  if (!token) throw new Error("No token provided");

  const response = await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
  if (!response.ok) throw new Error("Network response was not ok");
  return id;
};

export const updateProduct = async (id: number, data: UpdateProduct) => {
  return await fetchWithToken(`http://localhost:3000/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const createProduct = async (data: CreateProduct) => {
  return await fetchWithToken("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
