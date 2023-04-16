class Cell {
  isAlive = true;
  positionRow;
  positionColumn;

  constructor(positionRow, positionColumn) {
    this.positionRow = positionRow;
    this.positionColumn = positionColumn;
  }

  killCell(cell) {
    if (cell[this.positionRow][this.positionColumn]) {
      cell[this.positionRow][this.positionColumn].isAlive = false;
      return Cell[this.positionRow][this.positionColumn].isAlive;
    }
  }
}

export default Cell;
