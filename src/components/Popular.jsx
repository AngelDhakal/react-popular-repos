import React, { Fragment } from "react";

export default class Popular extends React.Component {
  render() {
    const languages = ["All", "Javascript", "Python", "Java"];
    return (
      <Fragment>
        <ul className="flex-center">
          {languages.map((language) => (
            <li key={language}>
              <button className="btn-clear nav-link">
                <strong>{language}</strong>
              </button>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
