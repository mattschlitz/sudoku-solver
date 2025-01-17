import { Board } from "../../src/classes/board";
import { Square } from "../../src/classes/square";
import { loopThroughRow } from "../../src/functions/iterators";
import { validateBox, validateColumn, validateRow, validateSquare } from "../../src/functions/validators";
import { importBoard } from "../../src/types";

export const brokenRow1: importBoard = [
  [1, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

test('validateRows should find errors in rows', () => {
  const board = new Board(brokenRow1);
  expect(() => {
    validateRow(board, 0)
  }).toThrow(new Error('row 0 is invalid'));
});

test('validateSquare should find errors in rows', () => {
  const board = new Board(brokenRow1);
  const testSquare = board.state[0][0];
  expect(() => {
    validateSquare(board, testSquare);
  }).toThrow(new Error('square 0 0 is invalid because of square 0 4'));
});


export const brokenColumn1: importBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

test('validateColumn should find errors in columns', () => {
  const board = new Board(brokenColumn1);
  expect(() => {
    validateColumn(board, 0)
  }).toThrow(new Error('column 0 is invalid'));
});

test('validateSquare should find errors in columns', () => {
  const board = new Board(brokenColumn1);
  const testSquare = board.state[1][0];
  expect(() => {
    validateSquare(board, testSquare);
  }).toThrow(new Error('square 1 0 is invalid because of square 6 0'));
});

export const brokenBox1: importBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 3, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

test('validateBoxes should find errors in boxes', () => {
  const board = new Board(brokenBox1);
  expect(() => {
    validateBox(board, 'NW')
  }).toThrow(new Error('box NW is invalid'));
});

test('validateSquare should find errors in boxes', () => {
  const board = new Board(brokenBox1);
  const testSquare = board.state[1][1];
  expect(() => {
    validateSquare(board, testSquare);
  }).toThrow(new Error('square 1 1 is invalid because of square 2 2'));
});

const mockErrorFreeBoard1: importBoard = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 5, 6, 0, 0, 0, 0, 0, 0],
  [7, 8, 9, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 0, 0, 0, 0],
  [6, 0, 0, 0, 0, 0, 0, 0, 0],
  [8, 0, 0, 0, 0, 0, 0, 0, 0],
  [9, 0, 0, 0, 0, 0, 0, 0, 0]
]

test('validate square should not find errors in valid board', () => {
  const board = new Board(mockErrorFreeBoard1);
  const testSquare = board.state[0][0];
  expect(() => {
    validateSquare(board, testSquare);
  }).not.toThrowError();

});
