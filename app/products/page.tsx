"use client";
import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import Form from "../components/Form";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/products";

const ProductsPage = () => {
  const { data: products, error, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const onDelete = async (id: any) => {
    console.log("id", id);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <Table products={products} onDelete={onDelete} />
      <Form />
    </div>
  );
};

export default ProductsPage;
