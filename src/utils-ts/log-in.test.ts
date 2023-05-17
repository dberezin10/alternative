import "whatwg-fetch";
import { multiPly } from "./log-in";

describe("Input", async () => {
  it("should render the input", () => {
    expect(multiPly(4)).toBe(16);
  });
});
