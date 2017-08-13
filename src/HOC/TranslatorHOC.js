import React,{Component} from 'react';
const defaultLocale = 'en';

const TranslatorHOC = (WrappedComponent) => {
  return class TranslatorHOC extends Component{
    constructor(props) {
      super(props);

    }
    render(){
      console.log(this)
      let currLocale = this.props.locale;

      let language;
      try{
        language = require(`../locales/${currLocale}.json`);

      }catch(err){
        language = require(`../locales/${defaultLocale}.json`);
        currLocale = defaultLocale;
      }

      if(language === void 0){
        return <WrappedComponent { ...this.props } />
      }
      return <WrappedComponent {...this.props} i18n={language} currLocale={currLocale} />;

    }
  }
}

export default TranslatorHOC;
