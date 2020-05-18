




const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ERRORS:
      if (typeof action.payload === "string") return { error: action.payload };
      return action.payload;
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}

export default errorReducer;

