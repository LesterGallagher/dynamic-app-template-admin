
                import React from 'react';
import ReactDOM from 'react-dom';
import AppsList from './AppsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
