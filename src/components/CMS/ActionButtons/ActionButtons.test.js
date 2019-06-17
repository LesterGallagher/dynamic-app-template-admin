
                import React from 'react';
import ReactDOM from 'react-dom';
import ActionButtons from './ActionButtons';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActionButtons />, div);
  ReactDOM.unmountComponentAtNode(div);
});
