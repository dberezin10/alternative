import { describe, it, expect } from "vitest";

describe("something truthy and falsy", () => {
  it("false to be false", () => {
    expect(false).toBe(false);
  });
});
