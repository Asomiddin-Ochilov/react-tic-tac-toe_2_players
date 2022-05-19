import React, { useState, useEffect } from "react";
import AnimatedPage from "../AnimatedPage";
import Icon from "../../Components/Icons/Index";
import Square from "./square";

const GamePage = () => {
  const [game, setGame] = useState(Array(9).fill(null));

  const [winner, setWinner] = useState(null);

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    const isCompyuter = game.filter((item) => item !== null).length % 2 === 1;

    const emptyIndex = game
      .map((item, index) => (item === null ? index : null))
      .filter((val) => val !== null);

    const linesArray = (a, b, c) => {
      return lines.filter((squareIndex) => {
        const squareValue = squareIndex.map((index) => game[index]);
        return (
          JSON.stringify([a, b, c].sort()) ===
          JSON.stringify(squareValue.sort())
        );
      });
    };

    const playerOne = linesArray("x", "x", "x").length > 0;

    const campyuterOne = linesArray("o", "o", "o").length > 0;

    if (playerOne) {
      setWinner("x");
    }

    if (campyuterOne) {
      setWinner("o");
    }

    const putCompyuter = (index) => {
      let newSquare = game;
      newSquare[index] = "o";
      setGame([...newSquare]);
    };

    if (isCompyuter) {
      const winLines = linesArray("o", "o", null);
      if (winLines.length > 0) {
        const winIndex = winLines[0].filter((index) => game[index] === null)[0];
        putCompyuter(winIndex);
        return;
      }

      const lineBlock = linesArray("x", "x", null);
      if (lineBlock.length > 0) {
        const blockIndex = lineBlock[0].filter(
          (index) => game[index] === null
        )[0];
        putCompyuter(blockIndex);
        return;
      }

      const lineContainer = linesArray("o", null, null);
      if (lineContainer.length > 0) {
        putCompyuter(winLines[0].filter((index) => game[index] === null)[0]);
        return;
      }

      const randomIndex =
        emptyIndex[Math.ceil(Math.random() * emptyIndex.length)];
      putCompyuter(randomIndex);
    }
  }, [game]);

  const clickSquare = (index) => {
    if (winner === "o") {
    } else {
      console.log(game);
      const isPlayer = game &&  game.filter((item) => item !== null).length % 2 === 0;
      console.log(isPlayer);
      if (isPlayer) {
        let newSquare = game;
        newSquare[index] = "x";
        setGame([...newSquare]);
      }
    }
  };

  const resetGame = () => {
    setWinner(null);
    setGame(Array(9).fill(null));
  };

  return (
    <AnimatedPage>
      <div className="game_page">
        <div className="navbar">
          <div className="logo">
            <Icon icon={"logo"} className={"icon_logo"} />
          </div>
        </div>
        <div className="content">
          <div className="header_bar">
            <div className="scoreboard">
              <span
                className={`score x-score font`}
              >
                {winner === 'x' ? 'you win' : ''}
              </span>
              <span className={`score o-score font`}>
              {winner === 'o' ? 'you lost' : ''}
              </span>
            </div>
          </div>
          <div className="game">
            {game.map((item, index) => (
              <Square
                x={item === "x" ? 1 : 0}
                o={item === "o" ? 1 : 0}
                onClick={() => item === null && clickSquare(index)}
                key={index}
              />
            ))}
          </div>
          <div className="footer_bar">
            <button onClick={resetGame} className={"start_btn font"}>
              restart
            </button>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default GamePage;
