import Cell from "../Cell/Cell.js";

class Universe {
  cells;

  constructor(positionX, positionY) {
    this.cells = this.createTableCells(positionX, positionY);
  }

  createTableCells(totalRows, totalColumns) {
    const table = [];

    for (let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
      const row = [];

      for (let columnIndex = 0; columnIndex < totalColumns; columnIndex++) {
        row.push(new Cell(rowIndex, columnIndex));
      }

      table.push(row);
    }

    return table;
  }
}

export default Universe;
