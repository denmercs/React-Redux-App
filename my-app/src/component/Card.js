import React from "react";

const Card = props => {
  return (
    <div className="card">
      <h3>{props.card.name}</h3>
      <img src={props.card.imageUrl} alt={props.card.name} />
    </div>
  );
};

export default Card;
