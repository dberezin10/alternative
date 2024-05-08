import "whatwg-fetch";
import App from "./App";
import { renderWithProviders } from "./test/render";

describe("Input", async () => {
  it("should render the input", () => {
    const screen = renderWithProviders(<App />);
    expect(screen.queryByText("fdf")).toBeNull();
  });
});
