import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { handlers } from "./app/tests/utils";
import Cookies from "js-cookie";
import { afterAll, afterEach, beforeAll, vi } from "vitest";

vi.mock("js-cookie", () => ({
  get: vi.fn().mockReturnValue("TOKEN_MOCKED"),
}));

export const server = setupServer(...handlers );

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());
