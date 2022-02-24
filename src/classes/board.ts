import { importBoard, importNumbers, indexes, stateType } from '../types';
import { Square } from "./square";
export class Board {

  private _state: stateType;

  constructor(importBoardData: importBoard) {
    this.createBoard(importBoardData);
  }

  get state() {
    return this._state;
  }

  set state(newState) {
    this._state = newState;
  }

  private createBoard(importBoardData: importBoard) {
    let protoState:any = importBoardData.map((row, rowIndex) => row.map((squareData: importNumbers, columnIndex) => {
      let square = new Square(rowIndex as indexes, columnIndex as indexes);
      if (squareData !== 0) square.currentNumber = `${squareData}`;
      return square;
    }))
    this._state = protoState as stateType;
  }

  viewSimpleOnConsole() {
    this._state.forEach((row) => {
      console.log(row.map((data) => data.currentNumber));
    })
    console.log('************************************');
  }

  viewFullOnConsole() {
    this._state.forEach((row) => {
      console.log(row);
    })
    console.log('************************************');
  }
}
