import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter} from "react-router-dom";
import { Layout } from '../../components/layout';
import MainRoute from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
    <Layout>
        {MainRoute}
    </Layout>
</BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
