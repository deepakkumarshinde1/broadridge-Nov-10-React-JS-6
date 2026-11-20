import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../App";

describe("App Components Basic UI", () => {
  test("check 'hello' is there", () => {
    render(<App />);
    let element = screen.getByText("Hello"); // query method
    expect(element).toBeInTheDocument();
  });

  test("is button has login text", () => {
    render(<App />);
    let element = screen.getByRole("button", {
      name: "Login",
    });
    expect(element).toBeInTheDocument();
  });

  test("check for label and input", () => {
    render(<App />);
    let input = screen.getByLabelText("Username");
    expect(input).toBeInTheDocument();
  });

  test("check for input placeholder", () => {
    render(<App />);
    let input = screen.getByPlaceholderText("Enter username");
    expect(input).toBeInTheDocument();
  });
});
