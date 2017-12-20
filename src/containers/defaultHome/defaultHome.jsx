import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './defaultHome.less';

const propTypes = {
  
};

const defaultProps = {

}

class DefaultHomeView extends PureComponent{
  
  constructor(props){
    super(props);
  }
  
  componentWillReceiveProps(nextProps){

  }

  componentWillMount(){
    
  }

  componentDidMount(){
    
  }

  componentWillUnmount(){
    
  }

  render(){
    return (
      <div className="container">
        hello blockchain-navigate
      </div>
    )
  }
}

DefaultHomeView.propTypes = propTypes;
DefaultHomeView.defaultProps = defaultProps;

export default DefaultHomeView;