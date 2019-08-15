import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import Card from "./Card";
import { getData } from "../actions";

const CardList = props => {
  return (
    <>
      <h1>Welcome to PokeCard</h1>
      <button className="btn-primary" onClick={props.getData}>
        {props.isLoading ? <Loader type="Hearts" /> : "Get Cards"}
      </button>
      <div className="cardList">
        {props.cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  cards: state.cards
});

export default connect(
  mapStateToProps,
  { getData }
)(CardList);
