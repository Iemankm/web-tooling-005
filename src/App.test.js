import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { wait } from "@testing-library/user-event/dist/utils";

describe("App", () => {
  it("should not break", async () => {
    render(<App />);
    expect(screen.getByTestId("loading")).toBeVisible();
    await waitForElementToBeRemoved(screen.queryByTestId("loading"));
    // expect(screen.getByTestId("main")).toBeVisible();
  });

  // it("should render loading state", async () => {
  //   render(<App />);
  //   expect(screen.getByTestId("main")).toHaveTextContent("loading");
  //   await waitForElementToBeRemoved(screen.queryByTestId("loading"));
  // });

  // it("should rnder when data is ready", async () => {
  //   render(<App />);
  //   expect(screen.getByTestId("main")).toHaveTextContent("loading");
  //   await waitForElementToBeRemoved(screen.queryByTestId("loading"));
  // });

  // it("should start at 1", () => {
  //   render(<App />);
  //   expect(screen.getByTestId("currentAmount")).toHaveTextContent("0");
  // });

  // it("should increment", () => {
  //   render(<App />);
  //   expect(screen.getByTestId("currentAmount")).toHaveTextContent("0");
  //   userEvent.click(screen.getByTestId("morebtn"));
  //   expect(screen.getByTestId("currentAmount")).toHaveTextContent("1");

  // });
});
