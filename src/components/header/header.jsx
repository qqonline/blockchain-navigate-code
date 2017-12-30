import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './header.less';

class Header extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const { defaultSelectKey } = this.props;
    return(
      <div className="header">
        <div className="header-sidebar-menu">
          <a 
            href="https://github.com/icepy/blockchain-navigate-code"
            target="_blank"
          >
            <img src="https://gw.alicdn.com/tfs/TB1EZyijxrI8KJjy0FpXXb5hVXa-64-64.png" />
          </a>
        </div>
        <div className="header-sidebar-group">
          <Link to="/" className={
            defaultSelectKey === 'home' ? 'home-link home-color' : 'home-link'
          }>导航</Link>
          <Link to="/InvestmentPrimer" className={
            defaultSelectKey === 'primer' ? 'home-link home-color' : 'home-link'
          }>投资入门</Link>
        </div>
      </div>
    )
  }
}

export default Header;