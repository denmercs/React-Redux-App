import {
  FETCHING_POKEMON_DATA,
  FETCHING_POKEMON_DATA_SUCCESS,
  FETCHING_POKEMON_DATA_FAILURE
} from "../actions";

const initialState = {
  cards: [],
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  console.log("ACTIONS HERE", action);
  switch (action.type) {
    case FETCHING_POKEMON_DATA:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCHING_POKEMON_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cards: action.payload,
        error: ""
      };
    case FETCHING_POKEMON_DATA_FAILURE:
      return {
        ...state,
        isLoading: true,
        error: "SERVER ERROR, WAIT FOR IT"
      };
    default:
      return state;
  }
};
