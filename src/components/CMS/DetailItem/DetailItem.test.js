
                import React from 'react';
import ReactDOM from 'react-dom';
import DetailItem from './DetailItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DetailItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
