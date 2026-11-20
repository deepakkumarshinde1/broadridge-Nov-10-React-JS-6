import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";
import { expect } from "vitest";

test("check props start", () => {
  render(<Counter start={10} />);
  let element = screen.getByTestId("h1-counter-props");
  expect(element).toBeInTheDocument();
  expect(element.innerHTML).toEqual("Count : 10");
});

test("check inc for button click", async () => {
  let user = userEvent.setup();
  render(<Counter start={0} />);
  await user.click(screen.getByRole("button", { name: "Increment" }));
  let element = screen.getByTestId("h1-counter-props");
  expect(element.innerHTML).toEqual("Count : 1");
});

test("check dec for button click", async () => {
  let user = userEvent.setup();
  render(<Counter start={0} />);
  await user.click(screen.getByRole("button", { name: "Decrement" }));
  let element = screen.getByTestId("h1-counter-props");
  expect(element.innerHTML).toEqual("Count : -1");
});

test("check mix for button clicks", async () => {
  let user = userEvent.setup();
  render(<Counter start={0} />);
  await user.click(screen.getByRole("button", { name: "Increment" }));
  await user.click(screen.getByRole("button", { name: "Decrement" }));
  await user.click(screen.getByRole("button", { name: "Decrement" }));
  await user.click(screen.getByRole("button", { name: "Decrement" }));
  await user.click(screen.getByRole("button", { name: "Decrement" }));
  await user.click(screen.getByRole("button", { name: "Increment" }));
  await user.click(screen.getByRole("button", { name: "Increment" }));
  let element = screen.getByTestId("h1-counter-props");
  expect(element.innerHTML).toEqual("Count : -1");
});
