import React, { useState } from 'react'
import { calculateWinner } from './game'

function Square({ value, onClick }: { value: string | null; onClick: () => void }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  )
}

function Board() {
  const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const winner = calculateWinner(squares)

  function handleClick(i: number) {
    if (squares[i] || winner) return
    const next = squares.slice()
    next[i] = xIsNext ? 'X' : 'O'
    setSquares(next)
    setXIsNext(!xIsNext)
  }

  function renderSquare(i: number) {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />
  }

  function reset() {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }

  let status
  if (winner) status = 'Winner: ' + winner
  else status = 'Next player: ' + (xIsNext ? 'X' : 'O')

  return (
    <div className="game">
      <div className="game-board">
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
        </div>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="app-root">
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  )
}
