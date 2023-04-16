import Universe from "./Universe/Universe.js";

const world = new Universe(3, 3);

world.cells[1][1].isAlive = false;

console.table(world.cells.map((row) => row.map((cell) => cell.isAlive)));
