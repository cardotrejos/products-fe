"use client";
import React, { useState, useEffect } from "react";
import Table from "../components/Table";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("There was a problem with fetch operation:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onDelete = async (id: any) => {
    console.log("id", id);
  }

  return (
    <div>
      <h1>Products</h1>
      <Table products={products} onDelete={onDelete} />
    </div>
  );
};

export default ProductsPage;
