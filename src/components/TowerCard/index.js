import React from "react";
import "./style.css";

const TowerCard = props =>
  (
    <div className="card" onClick={() => props.handleClickEvent(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={process.env.PUBLIC_URL + props.image} />
      </div>
    </div>
  );

export default TowerCard;