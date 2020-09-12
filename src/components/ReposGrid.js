import React from "react";
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from "react-icons/fa";
import "../App.css";

const ReposGrid = ({ repos }) => {
  return (
    <React.Fragment>
      <ul className="grid space-around">
        {repos.map((repo, index) => {
          const {
            name,
            owner,
            html_url,
            stargazers_count,
            forks,
            open_issues,
          } = repo;
          const { login, avatar_url } = owner;
          return (
            <li key={html_url} className="repo bg-light">
              <h4 className="header-lg center-text">#{index + 1}</h4>
              <img
                src={avatar_url}
                alt={`${login} avatar`}
                className="avatar"
              />
              <h2 className="center-text">
                <a
                  href={html_url}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </a>
              </h2>
              <ul className="card-list">
                <li>
                  <FaUser color="rgb(255,191,116)" size={22} />
                  <a
                    href={`https://github.com/${login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {login}
                  </a>
                </li>
                <li>
                  <FaStar color="rgb(255,215,0)" size={22} />
                  {stargazers_count.toLocaleString()} stars
                </li>
                <li>
                  <FaCodeBranch color="rgb(129,195,245)" size={22} />
                  {forks.toLocaleString()} forks
                </li>
                <li>
                  <FaExclamationTriangle color="rgb(241,138,147)" size={22} />
                  {open_issues.toLocaleString()} issues open
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default ReposGrid;
