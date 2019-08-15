import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import Card from "./Card";
import { getData } from "../actions";

const CardList = props => {
  return (
    <>
      <h1>Welcome to PokeCard Game</h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="Hearts" color="red" height="10" width="150" />
        ) : (
          "Get Cards"
        )}
      </button>
      {props.cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
      {/* {console.log("CARD TESTING RESULT", props.cards.cards)} */}
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
