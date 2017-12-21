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
    const { db } = this.props;
    return (
      <div className="container">
        <div className="header">
          <div className="header-sidebar-menu">
            <img src="https://gw.alicdn.com/tfs/TB1EZyijxrI8KJjy0FpXXb5hVXa-64-64.png" />
          </div>
          <a className="home-link" href="//icepy.me/blockchain-navigate">blockchain navigate</a>
        </div>

        <div className="content">
          {
            db.map((v,i) => {
              return (
                <div className="home-item" key={ 'icepy' + i }>
                  <div className="home-tab">
                    { v.tag }
                  </div>
                  <div className="home-item-sub-group">
                    {
                      ( v.dataSource || []).map((item, j) => {
                        return(
                          <a 
                            className="home-item-sub-group-item" 
                            href={ item.link }
                            key={ 'icepy_me' + j }
                            target="_blank"
                          >
                            { item.title }
                          </a>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

DefaultHomeView.propTypes = propTypes;
DefaultHomeView.defaultProps = defaultProps;

export default DefaultHomeView;