import { combineReducers } from "redux";
import * as actions from "./actions";

const reposReducer = (repos = [], action) => {
  if (action.type === actions.REPOS_ADD) {
    return action.payload.repos;
  }
  if (action.type === actions.REPOS_CLEAR) {
    return [];
  }

  return repos;
};

export default combineReducers({
  repos: reposReducer
});
