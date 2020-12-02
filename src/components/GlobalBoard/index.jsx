import React from 'react';
import LocalBoard from '../LocalBoard';
import './index.css';

const GlobalBoard = ({
  validBoardNumbers,
  localBoardStatus,
  squareData,
  clickSquare,
}) => {

  const renderBoard = (boardNumber) => {
    return (
      <LocalBoard 
        isValid={validBoardNumbers.indexOf(boardNumber) > -1}
        boardStatus={localBoardStatus[boardNumber]}
        boardNumber={boardNumber}
        squareData={squareData}
        clickSquare={clickSquare}
      />
    )
  }
  return (
    <div className="main-board">
        <div className="main-board-row">
          {renderBoard(0)}
          {renderBoard(1)}
          {renderBoard(2)}
        </div>
        <div className="main-board-row">
          {renderBoard(3)}
          {renderBoard(4)}
          {renderBoard(5)}
        </div>
        <div className="main-board-row">
          {renderBoard(6)}
          {renderBoard(7)}
          {renderBoard(8)}
        </div>
      </div>
  )
}

export default GlobalBoard;