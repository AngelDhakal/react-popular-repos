import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { fetchPopularRepos } from "../fetch/api";
//components
import LanguageNav from "./LanguageNav";
import ReposGrid from "./ReposGrid";

// prop-types
LanguageNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLang: PropTypes.func.isRequired,
};
ReposGrid.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "All",
      repos: {},
      error: null,
    };
    this.updateLang = this.updateLang.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }

  updateLang(lang) {
    this.setState({
      lang: lang,
      error: null,
    });
    if (!this.state.repos[lang]) {
      fetchPopularRepos(lang)
        .then((data) => {
          this.setState(({ repos }) => ({
            repos: {
              ...repos,
              [lang]: data,
            },
          }));
        })
        .catch(() => {
          console.warn("Error Fetching Repositories");
          this.setState({
            error: `There was an error fetching repositories`,
          });
        });
    }
  }

  componentDidMount() {
    this.updateLang(this.state.lang);
  }

  isLoading() {
    const { lang, repos, error } = this.state;
    return !repos[lang] && error === null;
  }

  render() {
    const { lang, repos, error } = this.state;
    return (
      <Fragment>
        <LanguageNav selected={lang} onUpdateLang={this.updateLang} />
        {this.isLoading() && <p>Loading</p>}
        {error && <p>{error}</p>}
        {repos[lang] && <ReposGrid repos={repos[lang]} />}
      </Fragment>
    );
  }
}
