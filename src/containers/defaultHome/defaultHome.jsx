import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './defaultHome.less';
import { getProtocol } from '../../shared/util';
import dbENUS from '../../db-en-US';
import dbZHCN from '../../db-zh-CN';
import Header from '../../components/header';
import Footer from '../../components/footer';

/**
 * 
 * TODO：默认CN，以后有时间再适配EN
 */

let db = {};
// const language = getLanguage();
const language = 'zh-CN';

switch(language){
  case 'en-US':
    db = dbENUS;
    break;
  case 'zh-CN':
    db = dbZHCN;
    break;
}

const propTypes = {
  db: PropTypes.array
};

const defaultProps = {
  db: db
}

class DefaultHome extends PureComponent{
  
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
        <Header defaultSelectKey="home"/>
        <div className="content">
          {
            db.map((v,i) => {
              let tabClass = 'home-tab';
              if (i === 0){
                tabClass += ' home-hot';
              }
              return (
                <div className="home-item" key={ 'icepy' + i }>
                  <div className={ tabClass }>
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
        <Footer/>
      </div>
    )
  }
}

DefaultHome.propTypes = propTypes;
DefaultHome.defaultProps = defaultProps;

export default DefaultHome;