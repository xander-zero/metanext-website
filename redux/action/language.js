export const setLanguage = (languageData) => (dispatch) => {
  if (languageData) {
    dispatch({ type: "GET_LANGUAGE_MODE", payload: languageData });
  }
};
