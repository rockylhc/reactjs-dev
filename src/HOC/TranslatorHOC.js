import React,{Component} from 'react';
import {connect} from 'react-redux';
const defaultLocale = 'en';

const TranslatorHOC = (WrappedComponent)  => {
  return class TranslatorHOC extends Component{
    constructor(props){
      super(props);
    }
    render(){

      let currLocale = this.props.locale;
      console.log(this);
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
