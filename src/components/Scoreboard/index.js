import React from 'react';
import './style.css'


const Scoreboard = props =>
  (
    <nav className="navbar navbar-expand-lg navbar-light">

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <span>World of Water Towers</span>
        </li>
      </ul>
      <span className="score-card">
        Score: {props.score} | Top Score: {props.topScore}
      </span>

    </nav>
  );

export default Scoreboard;