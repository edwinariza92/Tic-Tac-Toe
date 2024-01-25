import React from 'react';
import Square from './Square';  // Asegúrate de importar tu componente Square desde la ubicación correcta

const Board = ({ board, updateBoard }) => {
  return (
    <section className="game">
      {board.map((value, index) => (
        <Square key={index} index={index} updateBoard={updateBoard}>
          {value}
        </Square>
      ))}
    </section>
  );
};

export default Board;
