import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { changeLanguage } from 'redux/modules/language/language';
import { connect } from 'react-redux';

const supportedLanguages = [
  {
    id: 'lang.en',
    key: 'en',
    description: 'English',
    defaultMessage: 'English',
  },
  {
    id: 'lang.cn',
    key: 'cn',
    description: 'Chinese',
    defaultMessage: 'Chinese',
  },
];


class LanguageSelectionDropdown extends Component {
  languageText(lang) {
    return <FormattedMessage {...lang} />;
  }

  handleLanguageChange = (lang) => () =>
    this.props.dispatch(changeLanguage(lang)
   );

  render() {
    const currentLanguage = find(supportedLanguages, { key: this.props.language });

    return (
      <NavDropdown id="language-menu" title={this.languageText(currentLanguage)}>
        {supportedLanguages.map(lang =>
          <MenuItem key={lang.id} onClick={this.handleLanguageChange(lang.key)}>
            {this.languageText(lang)}
          </MenuItem>
        )}
      </NavDropdown>
    );
  }

}

const mapStateToProps = ({ language }) => ({ language });

export default connect(mapStateToProps)(LanguageSelectionDropdown);
