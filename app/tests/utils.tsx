import { render } from "@testing-library/react";
import { HttpResponse, http } from "msw";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const handlers = [
  http.get("http://localhost:3000/products", (req) =>  {
    const authToken = req.request.headers.get("Authorization");
    if (authToken !== 'TOKEN_MOCKED') {
    return HttpResponse.json([
      {
        id: 1,
        name: "Product 1",
        description: "Description 1",
        price: 100,
      },
      {
        id: 2,
        name: "Product 2",
        description: "Description 2",
        price: 200,
      },
    ]);
  } else {
    return HttpResponse.error();
  }
  }),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });


export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <QueryClientProvider client={testQueryClient}>
        {children}
      </QueryClientProvider>
    );
  };
}
