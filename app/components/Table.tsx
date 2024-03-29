import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Product, Products } from "../types/products";

const Table = ({
  products,
  onDelete,
  onEdit,
}: {
  products: Products | undefined;
  onDelete: (id: number) => void;
  onEdit: (data: Product) => void;
}) => {
  const columnHelper = createColumnHelper<Product>();

  const columns = [
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("description", {
      header: "Description",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("price", {
      header: "Price",
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: (info) => (
        <>
          <div className="flex gap-2">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => onDelete(info.row.original.id)}
            >
              Delete
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => onEdit(info.row.original)}
            >
              Edit
            </button>
          </div>
        </>
      ),
    }),
  ];
  const table = useReactTable({
    data: products || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <table className="border border-gray-700 w-full text-left">
      <thead className="bg-indigo-600">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="capitalize px-3.5 py-2">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.length ? (
          table.getRowModel().rows.map((row, i) => (
            <tr
              key={row.id}
              className={`
                ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
                `}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-3.5 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr className="text-center h-32">
            <td colSpan={12}>No Record Found!</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
