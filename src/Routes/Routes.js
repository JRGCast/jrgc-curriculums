import { Route, Switch } from 'react-router-dom';
import { CurrAdv, CurrDev, Home } from '../Pages';

const Routes = () => (
  <Switch>
    <Route path='/curr-adv' component={CurrAdv}/>
    <Route path='/curr-dev' component={CurrDev}/>
    <Route exact path='/' component={Home}/>
  </Switch>
)

export default Routes;
