
                import React from 'react';
import ReactDOM from 'react-dom';
import AppsBadge from './AppsBadge';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppsBadge />, div);
  ReactDOM.unmountComponentAtNode(div);
});
