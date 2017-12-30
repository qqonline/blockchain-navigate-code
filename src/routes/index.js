import DefaultHome from '../containers/defaultHome';
import InvestmentPrimer from '../containers/investmentPrimer';

export default [
  {
    path: '/',
    component: DefaultHome,
    exact: true
  },
  {
    path: '/InvestmentPrimer',
    component: InvestmentPrimer,
    exact: true
  }
];