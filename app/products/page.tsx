"use client";
import Table from "../components/Table";
import Modal from "../components/Modal";
import { useState } from "react";
import { Product, UpdateProduct } from "../types/products";
import { useDeleteProduct, useProducts } from "../hooks/useProducts";

const ProductsPage = () => {
  const [openModal, setModal] = useState<boolean>(false);
  const [editingProduct, setEditingProduct] = useState<Partial<Product> | null>(null);
  const { data: products, error, isError, isLoading } = useProducts();
  const { mutate: deleteProduct } = useDeleteProduct();
  const handleModal = () => {
    setModal(!openModal);
  }

  const onDelete = (id: number) => {
    deleteProduct(id);
  };

  const onEdit = (data: UpdateProduct) => {
    setEditingProduct(data);
    handleModal();
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Products</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4" onClick={handleModal}>Create product</button>
      <Table products={products} onDelete={onDelete} onEdit={onEdit} />
      <Modal openModal={openModal} handleModal={handleModal} initialProduct={editingProduct}/>
    </div>
  );
};

export default ProductsPage;
