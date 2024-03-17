"use client";
import Table from "../components/Table";
import Form from "../components/Form";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, getAllProducts } from "../api/products";
import Modal from "../components/Modal";
import { useState } from "react";

const ProductsPage = () => {
  const [openModal, setModal] = useState<boolean>(false);

  const handleModal = () => {
    setModal(!openModal);
  }

  const queryClient = useQueryClient();

  const { data: products, error, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const { mutate } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  })

  const onDelete = (id: any) => {
    mutate(id);
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
      <button onClick={handleModal}>Open modal</button>
      <Table products={products} onDelete={onDelete} />
      <Modal openModal={openModal} handleModal={handleModal} />
    </div>
  );
};

export default ProductsPage;
