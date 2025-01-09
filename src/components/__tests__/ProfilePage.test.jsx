import { render, screen } from "@testing-library/react";
import MyWallet from "../pages/MyWallet";

test("renders user's balance", () => {

  const balanceElement = screen.getByText(/\$10\.50/);
  expect(balanceElement).toBeInTheDocument();
});
