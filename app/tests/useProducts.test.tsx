import { HttpResponse, http } from "msw";
import { expect, test } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { server } from "../../setupTests";
import { createWrapper } from "./utils";
import { useProducts } from "../hooks/useProducts";

test("successful query hook", async () => {
  const { result } = renderHook(() => useProducts(), {
    wrapper: createWrapper(),
  });

  console.log('data', result.current.data);

  //await waitFor(() => expect(result.current.isSuccess).toBe(true));

/*   expect(result.current.data).toEqual([
    { id: 1, name: "Product 1", description: "Description 1", price: 100 },
    { id: 2, name: "Product 2", description: "Description 2", price: 200 },
  ]); */
});

test("failure query hook", async () => {
  server.use(
    http.get("http://localhost:3000/products", () =>
      HttpResponse.error()
    )
  );

  const { result } = renderHook(() => useProducts(), {
    wrapper: createWrapper(),
  });

  await waitFor(() => expect(result.current.isError).toBe(true));

  expect(result.current.error).toBeDefined();
});
