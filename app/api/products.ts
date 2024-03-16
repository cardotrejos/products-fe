export const getAllProducts = async () => {
  const response = await fetch("http://localhost:3000/products");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export const deleteProduct = async (id: any) => {
  const response = await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
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