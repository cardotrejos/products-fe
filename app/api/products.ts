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
  try {
    let data;
    const response = await fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Network response was not ok");
    data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with fetch operation:", error);
  }
};

export const createProduct = async (data: any) => {
  try {
    let data;
    const response = await fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Network response was not ok");
    data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with fetch operation:", error);
  }
};
