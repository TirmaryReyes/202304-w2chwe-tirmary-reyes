import createTableCells from "./createTable";

describe("createTableCells", () => {
  test("generates the correct number of rows and columns", () => {
    const cells = createTableCells(2, 2);
    expect(cells.length).toBe(3);
    expect(cells[0].length).toBe(3);
  });
});
