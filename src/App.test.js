import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should not break", () => {
    render(<App />);
    expect(screen.getByTestId("main")).toBeVisible();
  });

  it("should start at 1", () => {
    render(<App />);
    expect(screen.getByTestId("currentAmount")).toHaveTextContent("0");
  });

  it("should increment", () => {
    render(<App />);
    expect(screen.getByTestId("currentAmount")).toHaveTextContent("0");
    expect(screen.getByTestId("currentAmount")).toHaveTextContent("1");
  });
});
