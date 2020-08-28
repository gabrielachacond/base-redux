import React from "react";
import { Repo } from "./Repo";
import { connect } from "react-redux";

const ReposContainer = ({ repos = [] }) => {
  return repos.map((repo) => <Repo name={repo.name} />);
};

const mapStateToProps = ({ repos }) => ({ repos });

export default connect(mapStateToProps)(ReposContainer);
