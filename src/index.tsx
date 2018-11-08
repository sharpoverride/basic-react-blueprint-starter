import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import 'normalize.css/normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';

import { BrowserRouter as Router} from "react-router-dom";

import MainRoute, {analyticalRoute as AnalyticalApplication} from './modules/main';
import { Layout } from './components/layout';

ReactDOM.render(<Router>
    <Layout>
        {MainRoute}
        {AnalyticalApplication}
    </Layout>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
