import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { DropDown } from "../../src/components/DropDown";

const mockOptions = [
  { label: "Education 🎓", value: "education" },
  { label: "Science 🧪", value: "science" },
  { label: "Art 🖼️", value: "art" },
];

describe("DropDown", () => {
  it("renders all options", () => {
    render(
      <DropDown options={mockOptions} selected={[]} onSelect={() => {}} />
    );
    expect(screen.getByText("Education 🎓")).toBeInTheDocument();
    expect(screen.getByText("Science 🧪")).toBeInTheDocument();
    expect(screen.getByText("Art 🖼️")).toBeInTheDocument();
  });

  it("marks selected options correctly", () => {
    render(
      <DropDown
        options={mockOptions}
        selected={["science"]}
        onSelect={() => {}}
      />
    );
    expect(screen.getByText(/Yeeeah, Science 🧪/)).toBeInTheDocument();
  });

  it("calls onSelect when an option is clicked", () => {
    const onSelect = vi.fn();
    render(
      <DropDown options={mockOptions} selected={[]} onSelect={onSelect} />
    );
    fireEvent.click(screen.getByText("Art 🖼️"));
    expect(onSelect).toHaveBeenCalledWith("art");
  });
});
