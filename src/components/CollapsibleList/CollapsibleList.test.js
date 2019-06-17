
                import React from 'react';
import ReactDOM from 'react-dom';
import CollapsibleList from './CollapsibleList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CollapsibleList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
