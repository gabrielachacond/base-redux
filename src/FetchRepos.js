import React from "react";
import { connect } from "react-redux";
import { fetchRepos } from "./actions";

const FetchRepos = ({ fetchRepos }) => {
  return <button onClick={fetchRepos}>Fetch Repos</button>;
};

const mapDispatchProps = (dispatch) => {
  return {
    fetchRepos() {
      const fetchAndDispatch = fetchRepos();
      dispatch(fetchAndDispatch);
    }
  };
};

export default connect(null, mapDispatchProps)(FetchRepos);
