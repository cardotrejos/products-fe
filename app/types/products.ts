import { LoginCredentials, LoginResponse } from "../api/auth";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export type CreateProduct = Omit<Product, "id">

export type UpdateProduct = Partial<Product>;

export type DeleteProduct = (id: number) => void

export type Products = Product[]

export type GetAllProducts = () => Promise<Products>

export type CreateProductFn = (data: CreateProduct) => Promise<Product>

export type UpdateProductFn = (id: number, data: UpdateProduct) => Promise<Product>

export type DeleteProductFn = (id: number) => Promise<void>

export type GetProductFn = (id: number) => Promise<Product>

export type GetProductsFn = () => Promise<Products>

export type LoginFn = (credentials: LoginCredentials) => Promise<LoginResponse>

