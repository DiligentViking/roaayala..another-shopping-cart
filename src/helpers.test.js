import { expect, test } from "vitest";
import { capitalizeWord } from "./helpers";

test("handle single word", () => {
  expect(capitalizeWord("hello")).toBe("Hello");
});

test("handle words", () => {
  expect(capitalizeWord("hello world")).toBe("Hello World");
});

test("handle empty string", () => {
  expect(capitalizeWord("")).toBe("");
});

test("handle undefined input", () => {
  expect(capitalizeWord()).toBe("");
});

test("handle extra spaces", () => {
  expect(capitalizeWord("  ")).toBe("");
});
