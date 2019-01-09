import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter} from "react-router-dom";
import { Layout } from '../../components/layout';
import MainRoute from './';

import {validate, Length} from 'class-validator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
    <Layout>
        {MainRoute}
    </Layout>
</BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

class Demo {
  @Length(0,2, {message: "You should not have a title with more than 2 characters."})
  public title: string = '';
}
it('validates my class', async (done) => {

  const d = new Demo();
  d.title='abc';

  const results = await validate(d);

  console.log('bce', results[0].constraints.length);

  done();
});
