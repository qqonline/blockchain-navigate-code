import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import Footer from '../../components/footer';

import './investmentPrimer.less';

class InvestmentPrimer extends PureComponent{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="container">
        <Header defaultSelectKey="primer"/>
        <div className="content">
          <div className="primer-item">
            <h1>人民币直接购买</h1>
            <div className="primer-text">
              通过【场外交易OTC】平台实现，通常这种交易是个人与个人之间直接进行交易，平台做担保，可以理解为“淘宝”模式。
              如果遇到骗子（挂单）也会挺闹心，所以在选择平台时，一定要选择比较大的平台进行交易。由于其他平台的流程都非常类似（99%），所以可以先从火币的交易流程学习起来。
              目前火币提供了BTC，USDT两种模式，你可以选择其中任意一种进场。
              <p>买主流币：可直接用USDT买入想要的币种</p>
              <p>买小币种：先用USDT买入BTC或ETH，然后再将BTC或ETH换成想要的小币种</p>
              <ul>
                <li><a href="https://www.huobipro.com/zh-cn/help/#348">Huobi Pro</a></li>
              </ul>
            </div>
          </div>
          <div className="primer-item">
            <h1>数字货币如何卖</h1>
            <div className="primer-text">
              通过火币专业站将手中的数字货币交易成USDT，然后通过站内互转，将火币「专业站」中的USDT划转到火币「OTC站」，秒到账，0手续费。
            </div>
          </div>
          <div className="primer-item">
            <h1>该买什么数字货币</h1>
            <div className="primer-text">
              数字货币有上千种，并且还在不断的增加中，主要分为：
              <ul>
                <li>主流币：一般来说，这类币种都支持直接用USDT购买。例如：BTC比特币、BCC比特现金、ETH以太坊、LTC莱特币、DASH达世币、ETC以太经典、XRP瑞波币等</li>
                <li>热门小币：一般来说，这类币种往往仅支持用BTC、ETH进行兑换购买，例如：CMT、AST、RCN等</li>
              </ul>
              <p>给新人的建议：</p>
              <ul>
                <li>主流币种适合新人练手，可先小仓位练手积累经验</li>
                <li>小币种交易量不大，建议深入研究币种后，再考虑是否投资</li>
                <li>有操作经验后，做好合适的配仓比例</li>
                <li>若自认为并非短线高手，则建议考虑长线定投策略</li>
                <li>保持良好的心态</li>
              </ul>
            </div>
          </div>
          <div className="primer-item">
            <h1>数字货币交易须知</h1>
            <div className="primer-text">
              <ul>
                <li>时间：7*24小时，全年无休市。即T+0，股票是T+1交易，即当天买入股票，下一个交易日才可卖出。而虚拟货币是T+0交易，当天买入当天即可卖出。</li>
                <li>无涨跌停： 虚拟货币交易无涨跌停限制，股票有涨跌停限制。</li>
                <li>交易单位：最小可买0.0001BTC（约0.6元），没有股票最少买一手（100股）的买入限制。</li>
                <li>随时提币变现，资金流动性高。</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default InvestmentPrimer;
