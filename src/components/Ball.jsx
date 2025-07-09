import React, { useState } from 'react';
import '../styles/DevBall.css'
export function Ball () {
  const [userInput, setUserInput] = useState('');
  const [randomIndex, setRandomIndex] = useState(null);

  const possibleAnswers = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes, definitely',
    'You may rely on it',
    'As I see it, yes',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Do not count on it',
    'My reply is no',
    'My sources say no',
    'Most likely',
    'Outlook not so good',
    'Very doubtful',
  ];

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const ask = () => {
    if (userInput.trim()) {
      setRandomIndex(Math.floor(Math.random() * 20));
      setUserInput('');

      document.getElementById('front').style.background = 'black';
      document.getElementById('triangle').style.zIndex = '4';
      document.getElementById('answer').style.zIndex = '4';
      document.getElementById('number').style.zIndex = '0';
      document.getElementById('ball').style.animationName = 'shake';
    }
  };

  const reset = () => {
    setUserInput('');
    setRandomIndex(null);

    document.getElementById('front').style.background = 'white';
    document.getElementById('triangle').style.zIndex = '0';
    document.getElementById('answer').style.zIndex = '0';
    document.getElementById('number').style.zIndex = '4';
    document.getElementById('ball').style.removeProperty('animation-name');
  };

  return (
    <div>
      <div id="ball"></div>
      <div id="front"></div>
      <div id="number">8</div>
      <div id="triangle">
        <p id="answer">{randomIndex !== null ? possibleAnswers[randomIndex] : ''}</p>
      </div>
      <div id="form">
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          id="input"
          placeholder="Type in question here"
        />
        <button className="btns" onClick={ask}>
          Ask the Magic Eight Ball
        </button>
        <button className="btns" onClick={reset} id="reset">
          Reset
        </button>
      </div>
    </div>
  );
};
