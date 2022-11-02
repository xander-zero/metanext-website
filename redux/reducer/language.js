export const languageReducer = (state = { languageData: {} }, action) => {
  switch (action.type) {
    case "GET_LANGUAGE_MODE":
      return {
        ...state,
        languageData: action.payload,
      };
    default:
      return state;
  }
};
