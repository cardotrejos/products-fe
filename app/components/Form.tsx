import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateProduct, Product, UpdateProduct } from "../types/products";
import { useCreateProduct, useUpdateProduct } from "../hooks/useProducts";
import { useEffect } from "react";

const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0, "Price must be a positive number"),
});

const Form = ({
  handleModal,
  initialProduct,
}: {
  handleModal: () => void;
  initialProduct?: Partial<Product> | null;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  const { mutate: createProduct } = useCreateProduct();
  const { mutate: updateProduct } = useUpdateProduct();

  useEffect(() => {
    reset({
      name: initialProduct?.name ?? "",
      description: initialProduct?.description ?? "",
      price: initialProduct?.price ?? 0,
    });
  }, [initialProduct, reset]);

  const onSubmit = (data: CreateProduct | UpdateProduct) => {
    if (initialProduct) {
      updateProduct({
        id: initialProduct.id as number,
        updateData: data as UpdateProduct,
      });
    } else {
      createProduct(data as CreateProduct);
    }
    handleModal();
    reset({ name: "", description: "", price: 0 });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-transparent p-10">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-200"
          >
            Name:
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none 
            text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">
              {errors?.name?.message?.toString()}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-200"
          >
            Description:
          </label>
          <input
            {...register("description")}
            type="text"
            id="description"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none
            text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.description && (
            <p className="text-red-500 text-xs mt-1">
              {errors.description?.message?.toString()}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-200"
          >
            Price:
          </label>
          <input
            {...register("price", { valueAsNumber: true })}
            type="number"
            id="price"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
          {errors.price && (
            <p className="text-red-500 text-xs mt-1">
              {errors.price?.message?.toString()}
            </p>
          )}
        </div>

        <input
          type="submit"
          value={initialProduct ? "Update" : "Create"}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
      </form>
    </div>
  );
};

export default Form;
