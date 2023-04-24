

const element = React.createElement(
  'div',
  { className: 'Link' },
  React.createElement(
    'a',
    { href: 'https://www.google.co.th' },
    'LEARN REACT >'
  ),

  React.createElement(
    'div',
    { className: 'headerQuick' },
    React.createElement('h1', {}, 'Quick Start'),
    React.createElement(
      'p',
      {},
      'Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.'
    )
  ),

  React.createElement(
    'div',
    { className: 'headerBox' },
    React.createElement('h3', {}, 'You will learn'),
    React.createElement(
      'p',
      {},
      React.createElement('li', {}, 'How to create and nest components'),
      React.createElement('li', {}, 'How to add markup and styles'),
      React.createElement('li', {}, 'How to display data'),
      React.createElement('li', {}, 'How to render conditions and lists'),
      React.createElement('li', {}, 'How to respond to events and update the screen'),
      React.createElement('li', {}, 'How to share data between components'),
    )
  )
);

// ReacDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(element);
