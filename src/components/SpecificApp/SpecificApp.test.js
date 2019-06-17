
                import React from 'react';
import ReactDOM from 'react-dom';
import SpecificApp from './SpecificApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SpecificApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
