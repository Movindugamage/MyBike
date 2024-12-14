import { render, screen } from "@testing-library/react";
import ProfilePage from "./ProfilePage";

test("renders user's balance", () => {

  const balanceElement = screen.getByText(/\$10\.50/);
  expect(balanceElement).toBeInTheDocument();
});
