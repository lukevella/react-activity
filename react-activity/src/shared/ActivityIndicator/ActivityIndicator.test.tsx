import * as React from "react";
import { render, screen } from "@testing-library/react";
import ActivityIndicator from "./ActivityIndicator";

describe("<ActivityIndicator />", () => {
  it("should render", () => {
    render(<ActivityIndicator defaultAnimationDuration={1} />);
    expect(screen.getByTestId("rai-activity-indicator")).toBeDefined();
  });
  it("should have the right color", () => {
    render(<ActivityIndicator color="red" defaultAnimationDuration={1} />);
    expect(screen.getByTestId("rai-activity-indicator")).toHaveStyle({
      color: "red",
    });
  });
  it("should have the right size", () => {
    render(<ActivityIndicator size={32} defaultAnimationDuration={1} />);
    expect(screen.getByTestId("rai-activity-indicator")).toHaveStyle({
      fontSize: "32px",
    });
  });
  it("should not render if not animating", () => {
    render(
      <ActivityIndicator animating={false} defaultAnimationDuration={1} />
    );
    expect(screen.queryByTestId("rai-activity-indicator")).toBeNull();
  });
});
