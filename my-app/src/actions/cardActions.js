import axios from "axios";

export const FETCHING_POKEMON_DATA = "FETCHING_POKEMON_DATA";
export const FETCHING_POKEMON_DATA_SUCCESS = "FETCHING_POKEMON_DATA_SUCCESS";
export const FETCHING_POKEMON_DATA_FAILURE = "FETCHING_POKEMON_DATA_FAILURE";

export const getData = () => {
  return dispatch => {
    // dispatch an action before async call that tells reducer what type
    dispatch({ type: "FETCHING_POKEMON_DATA" });
    axios
      .get("https://api.pokemontcg.io/v1/cards")
      .then(res => {
        dispatch({
          type: FETCHING_POKEMON_DATA_SUCCESS,
          payload: res.data.cards
        });
      })
      .catch(err => {
        dispatch({
          type: FETCHING_POKEMON_DATA_FAILURE,
          payload: err
        });
      });
  };
};
