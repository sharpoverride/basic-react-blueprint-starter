import { MainComponent } from './main-component';
import * as React from 'react';
import {Route} from 'react-router-dom';
import { AnalyticalComponent } from './analytical-component';

export {MainComponent} from './main-component';

const mainRoute: React.ReactElement<Route> = <Route exact path="/" component={MainComponent}/>;
const analyticalRoute = <Route exact path="/analytical-application" component={AnalyticalComponent}/>

export {analyticalRoute};
export default mainRoute;