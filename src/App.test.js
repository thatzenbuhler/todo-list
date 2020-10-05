import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Check for top bar", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Tyler's React Todo List/i);
  expect(linkElement).toBeInTheDocument();
});

test("Display's Example todo", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Example todo 1/i);
  expect(linkElement).toBeInTheDocument();
});
