
                import React from 'react';
import ReactDOM from 'react-dom';
import DetailItemSettings from './DetailItemSettings';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DetailItemSettings />, div);
  ReactDOM.unmountComponentAtNode(div);
});
