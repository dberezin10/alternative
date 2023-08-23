import "whatwg-fetch";
import App from "./App";
import { render } from "@testing-library/react";

describe("Input", async () => {
  it("should render the input", () => {
    const screen = render(<App />);
    expect(screen.queryByText("fdf")).toBeNull();
  });
});
