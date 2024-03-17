import Cookies from "js-cookie";

export const getAllProducts = async () => {
  const token = Cookies.get("token");

  if (!token) throw new Error("No token provided");

  const response = await fetch("http://localhost:3000/products", {
    headers: {
      Authorization: token,
    },
  });
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export const deleteProduct = async (id: number) => {
  const token = Cookies.get("token");
  
  if (!token) throw new Error("No token provided");

  const response = await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    }
  });
  if (!response.ok) throw new Error("Network response was not ok");
  return id;
};

export const updateProduct = async (id: any, data: any) => {
  const response = await fetch(`http://localhost:3000/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export const createProduct = async (data: any) => {
  const response = await fetch(`http://localhost:3000/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};
