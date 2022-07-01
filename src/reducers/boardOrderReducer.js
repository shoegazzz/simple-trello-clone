import { CONSTANTS } from "../actions";

const initialState = [];

const boardOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_BOARD: {
      return [...state, `board-${action.payload.id}`];
    }

    case CONSTANTS.CLEAR_APP: {
      return initialState
    }

    default:
      return state;
  }
};

export default boardOrderReducer;
