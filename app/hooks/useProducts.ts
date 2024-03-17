import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct, deleteProduct, getAllProducts, updateProduct } from "../api/products";
import { UpdateProduct } from "../types/products";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products", "all"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

 export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { id: number; updateData: UpdateProduct }) =>
      updateProduct(data.id, data.updateData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}