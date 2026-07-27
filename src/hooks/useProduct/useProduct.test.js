import { renderHook, waitFor, act } from "@testing-library/react";
import useProduct from "./useProduct";
import { test, expect, vi, beforeEach } from "vitest";

const mockData = [
  { id: 1, title: "Item 1", category: "men's clothing" },
  { id: 2, title: "Item 2", category: "men's clothing" },
  { id: 3, title: "Item 3", category: "women's clothing" },
];

globalThis.fetch = vi.fn();
beforeEach(() => {
  vi.clearAllMocks();
});

test("fetch products data on initial render", async () => {
  fetch.mockResolvedValueOnce({ ok: true, json: async () => mockData });

  const { result } = renderHook(() => useProduct());

  expect(result.current.products).toEqual([]);
  expect(result.current.isLoading).toBe(true);
  expect(result.current.error).toBe(null);

  await waitFor(() => {
    expect(result.current.isLoading).toBe(false);
  });

  expect(result.current.products).toEqual(mockData);
  expect(result.current.error).toBe(null);
  expect(result.current.products.length).toBe(3);
  expect(result.current.productCategories.length).toBe(2);
});

test("on error fetching data", async () => {
  fetch.mockResolvedValueOnce({ ok: false });

  const { result } = renderHook(() => useProduct());

  expect(result.current.products).toEqual([]);
  expect(result.current.isLoading).toBe(true);
  expect(result.current.error).toBe(null);

  await waitFor(() => {
    expect(result.current.isLoading).toBe(false);
  });

  expect(result.current.products).toEqual([]);
  expect(result.current.error).toBe("Cannot fetch products");
  expect(result.current.products.length).toBe(0);
  expect(result.current.productCategories.length).toBe(0);
});

test("on connection fail", async () => {
  fetch.mockRejectedValueOnce(new Error("Cannot connect to the server"));

  const { result } = renderHook(() => useProduct());

  await waitFor(() => {
    expect(result.current.isLoading).toBe(false);
  });

  expect(result.current.products).toEqual([]);
  expect(result.current.error).toBe("Cannot connect to the server");
});

test("on refetch", async () => {
  fetch.mockRejectedValueOnce(new Error("Cannot connect to the server"));

  const { result } = renderHook(() => useProduct());

  await waitFor(() => {
    expect(result.current.isLoading).toBe(false);
  });

  expect(result.current.error).toBe("Cannot connect to the server");

  fetch.mockResolvedValueOnce({ ok: true, json: async () => mockData });

  act(() => {
    result.current.refetchProducts();
  });

  expect(result.current.isLoading).toBe(true);
  expect(result.current.error).toBe(null);

  await waitFor(() => {
    expect(result.current.isLoading).toBe(false);
  });

  expect(result.current.products).toEqual(mockData);
});
