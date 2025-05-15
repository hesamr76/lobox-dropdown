import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SelectedOptions } from "../../src/components/SelectedOptions";

describe("SelectedOptions", () => {
  it("renders no options when selected is empty", () => {
    render(<SelectedOptions selected={[]} />);
    expect(screen.queryByText(/.+/)).not.toBeInTheDocument();
  });

  it("renders all selected options", () => {
    const selected = ["education", "science", "games"];
    render(<SelectedOptions selected={selected} />);

    selected.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it("applies correct CSS class to each option", () => {
    const selected = ["art"];
    const { container } = render(<SelectedOptions selected={selected} />);
    const span = container.querySelector("span");
    expect(span?.className).toMatch(/selectedOption/);
  });
});
