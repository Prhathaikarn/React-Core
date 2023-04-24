


let linkEl = React.createElement('a', {className: 'card__link', href: 'https://googel.co.th'}, 'More Information...');

let text = 'This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission.'

const content = React.createElement('p', null, text);
const header = React.createElement('h1', {className: 'card__content'}, 'Example Domain');

// PARENT
const card = React.createElement('div', { className: 'card' }, header, content, linkEl);


// ReacDOM
const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot);

root.render(card)