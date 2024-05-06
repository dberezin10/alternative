import "whatwg-fetch";

import { act, fireEvent, render } from "@testing-library/react";
import TimerView from "../TimerView";

describe("TimerView", async () => {
  it("should render TimerView", () => {
    const screen = render(<TimerView />);

    const btnTimer = screen.queryByText("Click timer") as HTMLButtonElement;
    expect(screen.queryByText(/Seconds passed:/i)).toBeVisible();
    expect(btnTimer).toBeVisible();

    act(() => {
      fireEvent.click(btnTimer);
    });

    expect(screen.queryByText(/Seconds passed: 2/i)).toBeVisible();
  });
});
