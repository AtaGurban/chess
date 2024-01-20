import { Colors } from "../Colors";
import blackKing from "../../assets/black-king.png"
import { Cell } from "../Cell";
export enum FigureNames {
  FIGURE = "Фигура",
  KING = "Король",
  KNIGHT = "Конь",
  PAWN = "Пешка",
  QUERY = "Ферзь",
  ROOK = "Ладья",
  BISHOP = "Слон"
}
export class Figure {
  color: Colors;
  logo: typeof blackKing | null;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this
    this.name = FigureNames.FIGURE;
    this.id = Math.random()
    this.logo = null
  }
}