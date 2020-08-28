export const REPOS_ADD = "REPOS_ADD";
export const REPOS_CLEAR = "REPOS_CLEAR";

export const fetchRepos = (username) => {
  return (dispatch) => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=2`)
      .then((response) => response.json())
      .then((response) => {
        dispatch(reposAdd(response));
      });
  };
};

export const reposAdd = (repos) => {
  const action = {
    type: REPOS_ADD,
    payload: { repos }
  };
  return action;
};
