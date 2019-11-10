import React from 'react';
import './style.css'


const Jumbotron = props =>
  (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">{props.message}</h1>
        <h3 className="lead">Click any tower to score, but don't click the same one twice!</h3>
      </div>
    </div>
  );

export default Jumbotron;