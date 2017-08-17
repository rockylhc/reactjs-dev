import React,{Component} from 'react';

const ProtectedHOC = (WrappedComponent)  => {
  return class TranslatorHOC extends Component{
    componentWillMount(){
      const {user:{isAuthenticated}, location, history} = this.props;
      if(isAuthenticated == false){
        const currentLocation = location.pathname;
        history.push('/login?returnUrl='+currentLocation);
      }
    }
    render(){
      return <WrappedComponent {...this.props} />;
    }
  }
}



export default ProtectedHOC;
