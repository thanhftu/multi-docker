import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const a = 1;
  const b = 2;
  const c = a + b;
  expect(c).toBe(3);
});
