import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import InputBox from "../components/InputBox";
import userEvent from "@testing-library/user-event";

test("check input change", async () => {
  let user = userEvent.setup();
  render(<InputBox />);
  let input = screen.getByLabelText("User Text");
  await user.type(input, "sam");
  expect(input).toHaveValue("sam");
  let element = screen.getByText("Name is : sam");
  expect(element).toBeInTheDocument();
});
