import React, { useState } from "react";
import AnimatedPage from "../AnimatedPage";
import Icon from "../../Components/Icons/Index";
import Square from "./square";

const GamePage = () => {
  
  const [xPlaying, setXPlaying] = useState(true);

  const [game, setGame] = useState(Array(9).fill(null));

  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });

  const [gameOver, setGameOver] = useState(false);

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

  const handleItemClick = (boxIdx) => {
    const updatedGame = game.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "x" : "o";
      } else {
        return value;
      }
    });

    setGame(updatedGame);

    const winner = checkWinner(updatedGame);

    if (winner) {
      if (winner === "o") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }

    setXPlaying(!xPlaying);
  };

  const checkWinner = (game) => {
    for (let i = 0; i < lines.length; i++) {
      const [x, y, z] = lines[i];

      if (game[x] && game[x] === game[y] && game[y] === game[z]) {
        setGameOver(true);
        return game[x];
      }
    }
  };

  const resetGame = () => {
    setGameOver(false);
    setScores({ xScore: 0, oScore: 0 })
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
                className={`score x-score font  ${!xPlaying && "inactive"}`}
              >
                X - {scores.xScore}
              </span>
              <span className={`score o-score font ${xPlaying && "inactive"}`}>
                O - {scores.oScore}
              </span>
            </div>
          </div>
          <div className="game">
            {game.map((item, index) => (
              <Square
                x={item === "x" ? 1 : 0}
                o={item === "o" ? 1 : 0}
                onClick={() => item === null && handleItemClick(index)}
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
