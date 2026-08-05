import useCart from "./useCart";
import { expect, test } from "vitest";
import { act, renderHook } from "@testing-library/react";

test("at start cart must be empty", () => {
  const { result } = renderHook(() => useCart());

  expect(result.current.cart).toEqual([]);
  expect(result.current.totalItems).toEqual(0);
  expect(result.current.totalPrices).toEqual(0);
});

test("success added to cart", () => {
  const { result } = renderHook(() => useCart());
  const product = { id: 1, title: "Shoes", price: 100 };

  act(() => result.current.addToCart(product));

  expect(result.current.cart.length).toEqual(1);
  expect(result.current.cart[0].quantity).toEqual(1);
  expect(result.current.totalItems).toEqual(1);
  expect(result.current.totalPrices).toEqual(100);
});

test("quantity increase if a item added again", () => {
  const { result } = renderHook(() => useCart());
  const product = { id: 1, title: "Shoes", price: 100 };

  act(() => {
    result.current.addToCart(product);
    result.current.addToCart(product);
  });

  expect(result.current.cart.length).toEqual(1);
  expect(result.current.cart[0].quantity).toEqual(2);
  expect(result.current.totalItems).toEqual(2);
  expect(result.current.totalPrices).toEqual(200);
});

test("remove item if quantity below one", () => {
  const { result } = renderHook(() => useCart());
  const product = { id: 1, title: "Shoes", price: 100 };

  act(() => {
    result.current.addToCart(product);
    result.current.removeFromCart(product.id);
  });

  expect(result.current.cart).toEqual([]);
  expect(result.current.cart.length).toEqual(0);
  expect(result.current.cart[0]).toEqual(undefined);
  expect(result.current.totalItems).toEqual(0);
  expect(result.current.totalPrices).toEqual(0);
});

test("decrease selected item", () => {
  const { result } = renderHook(() => useCart());
  const product = { id: 1, title: "Shoes", price: 100 };

  act(() => {
    result.current.addToCart(product);
    result.current.addToCart(product);
    result.current.removeFromCart(product.id);
  });

  expect(result.current.cart.length).toEqual(1);
  expect(result.current.cart[0].quantity).toEqual(1);
  expect(result.current.totalItems).toEqual(1);
  expect(result.current.totalPrices).toEqual(100);
});
