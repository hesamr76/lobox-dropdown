import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MultiSelectInput } from "../../src/components/MultiSelectInput";

describe("MultiSelectInput", () => {
  it("renders selected options", () => {
    render(
      <MultiSelectInput
        selected={["React", "TypeScript"]}
        onCreate={() => {}}
        onOpen={() => {}}
      />
    );
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("updates input value on typing", () => {
    render(
      <MultiSelectInput selected={[]} onCreate={() => {}} onOpen={() => {}} />
    );
    const input = screen.getByPlaceholderText(
      "Type To Add More"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "hello" } });
    expect(input.value).toBe("hello");
  });

  it("calls onCreate with formatted value on Enter", () => {
    const onCreate = vi.fn();
    render(
      <MultiSelectInput selected={[]} onCreate={onCreate} onOpen={() => {}} />
    );
    const input = screen.getByPlaceholderText("Type To Add More");
    fireEvent.change(input, { target: { value: "design" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(onCreate).toHaveBeenCalledWith("Design");
  });

  it("does not call onCreate if input is empty or whitespace", () => {
    const onCreate = vi.fn();
    render(
      <MultiSelectInput selected={[]} onCreate={onCreate} onOpen={() => {}} />
    );
    const input = screen.getByPlaceholderText("Type To Add More");
    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(onCreate).not.toHaveBeenCalled();
  });

  it("calls onOpen when input is focused", () => {
    const onOpen = vi.fn();
    render(
      <MultiSelectInput selected={[]} onCreate={() => {}} onOpen={onOpen} />
    );
    const input = screen.getByPlaceholderText("Type To Add More");
    fireEvent.focus(input);
    expect(onOpen).toHaveBeenCalled();
  });

  it("focuses input when container is clicked", () => {
    render(
      <MultiSelectInput selected={[]} onCreate={() => {}} onOpen={() => {}} />
    );
    const input = screen.getByPlaceholderText("Type To Add More");
    const container = input.parentElement!;
    fireEvent.click(container);
    expect(document.activeElement).toBe(input);
  });
});
