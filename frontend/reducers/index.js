function rootReducer(state = {name: 'Horizons'}, action) {
  switch (action.type) {
    case "CHANGE_USER_TYPE":
      return Object.assign({}, state, {
        userType: state.userType === "Volunteer"
        ? "Administrator"
        : "Volunteer"
      });
    case "REQUEST_REGISTRATION":
      return Object.assign({}, state, {
        waitingForAuthentication: true
      });
    default:
        return state;
    }
}

export default rootReducer;
