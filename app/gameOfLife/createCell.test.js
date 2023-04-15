import createTableCells from "./createCell";

describe("Given the function createTableCells", () => {
  describe("When it receives the value of 2 rows and 2 columns", () => {
    test("Then it should return a bidimensional array of 3 rows and 3 columns", () => {
      const cells = createTableCells(2, 2);
      expect(cells.length).toBe(3);
      expect(cells[0].length).toBe(3);
    });
  });
});
