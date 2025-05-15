import { test, expect } from "@playwright/test";

test.describe("MultiDropDownSelect E2E", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173"); // Vite default
  });

  test("should render the heading and input", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /multi drop-down/i })
    ).toBeVisible();
    await expect(page.getByPlaceholder("Type To Add More")).toBeVisible();
  });

  test("should select an existing option", async ({ page }) => {
    await page.getByPlaceholder("Type To Add More").click();
    await page.getByText("Art 🖼️").click();
    await expect(page.getByText("Art", { exact: true })).toBeVisible(); // Tag
  });

  test("should create a new option and select it", async ({ page }) => {
    const input = page.getByPlaceholder("Type To Add More");
    await input.click();
    await input.fill("TestValue");
    await input.press("Enter");

    await expect(page.getByText("TestValue", { exact: true })).toBeVisible();
    await input.click();
    await expect(page.getByText(/Yeeeah, TestValue 🆕/)).toBeVisible();
  });

  test("should toggle selection (select and deselect)", async ({ page }) => {
    await page.getByPlaceholder("Type To Add More").click();
    await page.getByText("Science 🧪").click();
    await expect(page.getByText("Science", { exact: true })).toBeVisible();

    await page.getByText(/Yeeeah, Science 🧪/).click();
    await expect(page.getByText("Science", { exact: true })).not.toBeVisible();
  });

  test("should close dropdown when clicking outside", async ({ page }) => {
    await page.getByPlaceholder("Type To Add More").click();
    await page.getByText("Science 🧪").click();
    await page.getByRole("heading", { name: /multi drop-down/i }).click();
    await expect(page.getByText(/Yeeeah, Science 🧪/)).not.toBeVisible();
    await expect(page.getByText("Science")).toBeVisible();
  });
});
