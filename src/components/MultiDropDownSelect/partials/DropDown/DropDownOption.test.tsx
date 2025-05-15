import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { DropDownOption } from "./DropDownOption";
import styles from "./DropDown.module.scss";

describe("DropDownOption", () => {
  it("renders the label correctly", () => {
    render(
      <DropDownOption isSelected={false} label="Art 🖼️" onClick={() => {}} />
    );
    expect(screen.getByText(/Art 🖼️/)).toBeInTheDocument();
  });

  it("adds prefix and checkmark when selected", () => {
    render(
      <DropDownOption isSelected={true} label="Science 🧪" onClick={() => {}} />
    );
    expect(screen.getByText(/Yeeeah, Science 🧪/)).toBeInTheDocument();
    expect(screen.getByText("✔")).toBeInTheDocument();
  });

  it("applies selected class when isSelected is true", () => {
    render(
      <DropDownOption isSelected={true} label="Health 🏥" onClick={() => {}} />
    );
    const option = screen.getByText(/Yeeeah, Health 🏥/).parentElement;
    expect(option?.className).toContain(styles.selected);
  });

  it("triggers onClick when clicked", () => {
    const handleClick = vi.fn();
    render(
      <DropDownOption
        isSelected={false}
        label="Games 🎮"
        onClick={handleClick}
      />
    );
    fireEvent.click(screen.getByText(/Games 🎮/));
    expect(handleClick).toHaveBeenCalled();
  });
});
