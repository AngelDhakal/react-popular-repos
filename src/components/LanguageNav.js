import React from "react";

const LanguageNav = ({ selected, onUpdateLang }) => {
  const languages = [
    "All",
    "Python",
    "Javascript",
    "Typescript",
    "Java",
    "Rust",
  ];
  return (
    <React.Fragment>
      <ul className="flex-center">
        {languages.map((language) => (
          <li key={language}>
            <button
              className="btn-clear nav-link"
              style={language === selected ? { color: "dodgerblue" } : null}
              onClick={() => onUpdateLang(language)}
            >
              <strong> {language} </strong>
            </button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default LanguageNav;
