import React, { useEffect, useState, useRef } from "react";
import "./Game.css";
import kata from "./Kata";
import { Link } from "react-router-dom";

function Game() {
  const [correctWord, setCorrectWord] = useState("");
  const timerRef = useRef(null);
  const correctWordRef = useRef("");
  const inputRef = useRef(null);

  useEffect(() => {
    const kataText = document.querySelector(".word");
    const hintText = document.querySelector(".hint span");
    const timeText = document.querySelector(".time b");
    const refreshBtn = document.querySelector(".refresh-word");
    const checkBtn = document.querySelector(".check-word");

    if (kataText && hintText) {
      const initTimer = (maxTime) => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
          if (maxTime > 0) {
            maxTime--;
            timeText.innerText = maxTime;
          } else {
            clearInterval(timerRef.current);
            alert(
              `Time off! ${correctWordRef.current.toUpperCase()} was the correct word`
            );
            initGame();
          }
        }, 1000);
      };

      const initGame = () => {
        initTimer(30);
        let randomObj = kata[Math.floor(Math.random() * kata.length)];
        let wordArray = randomObj.kata.split("");
        for (let i = wordArray.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        }
        kataText.innerText = wordArray.join("");
        hintText.innerText = randomObj.hint;
        correctWordRef.current = randomObj.kata.toLowerCase();
        inputRef.current.value = "";
        inputRef.current.setAttribute(
          "maxlength",
          correctWordRef.current.length
        );
      };

      initGame();

      const checkWord = () => {
        let userWord = inputRef.current.value.toLowerCase();
        if (!userWord) return alert(`Please insert the word`);
        if (userWord !== correctWordRef.current)
          return alert(`Oops! ${userWord} is not correct`);
        alert(`Congrats! ${userWord} is the correct word`);
        initGame();
      };

      const handleKeyPress = (event) => {
        if (event.key === "Enter") {
          checkWord();
        }
      };

      if (refreshBtn && checkBtn && inputRef.current) {
        refreshBtn.addEventListener("click", initGame);
        checkBtn.addEventListener("click", checkWord);
        inputRef.current.addEventListener("keypress", handleKeyPress);
      }

      return () => {
        if (refreshBtn && checkBtn && inputRef.current) {
          refreshBtn.removeEventListener("click", initGame);
          checkBtn.removeEventListener("click", checkWord);
          inputRef.current.removeEventListener("keypress", handleKeyPress);
        }
        clearInterval(timerRef.current);
      };
    }
  }, []);

  return (
    <div className="game-bg">
      <div className="containers">
        <h2>Scramble Word Game</h2>
        <div className="content">
          <p className="word"></p>
          <div className="detail">
            <p className="hint">
              Hint : <span></span>
            </p>
            <p className="time">
              Sisa Waktu :{" "}
              <span>
                <b>30</b>s
              </span>
            </p>
          </div>
          <input
            type="text"
            placeholder="Masukkan kata yang tepat"
            ref={inputRef}
          />
          <div className="buttons">
            <button className="refresh-word">Refresh Kata</button>
            <button className="check-word">Check Kata</button>
          </div>
        </div>
        <button className="tombol-balik">
          <Link to="/">Back</Link>
        </button>
      </div>
    </div>
  );
}

export default Game;
