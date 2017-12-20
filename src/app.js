import React from 'react';
import ReactDOM from 'react-dom';
import DefaultHomeView from './containers/defaultHome';
import './styles/normalize.css';
import './styles/global.less';
import { getLanguage } from './shared/util';
import dbENUS from './db-en-US';
import dbZHCN from './db-zh-CN';

let db = {};
const language = getLanguage();
switch(language){
  case 'en-US':
    db = dbENUS;
    break;
  case 'zh-CN':
    db = dbZHCN;
    break;
}

ReactDOM.render(
  <DefaultHomeView db={ db }/>,
  document.getElementById('app')
)