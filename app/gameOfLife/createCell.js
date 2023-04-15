class Universe {
  cells;
  constructor(positionX, positionY) {
    this.cells = this.createTableCells(positionX, positionY);
  }
}

const createTableCells = (totalRows, totalColumns) => {
  const table = [];

  for (let rowIndex = -1; rowIndex < totalRows; rowIndex++) {
    const row = [];

    for (let columnIndex = -1; columnIndex < totalColumns; columnIndex++) {
      row.push({
        positionY: columnIndex,
        positionX: rowIndex,
        isAlive: true,
      });
    }

    table.push(row);
  }

  return table;
};

export default createTableCells;
