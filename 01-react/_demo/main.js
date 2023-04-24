

// # 1
// const header = React.createElement('h1', { className: 'text-red'}, 'Hello from React');

// const domRoot = document.getElementById('root')
// const root = ReactDOM.createRoot(domRoot);

// root.render(header);


// # 2

let list1 = React.createElement('li', null, 'item-1')
let list2 = React.createElement('li', null, 'item-2')
let list3 = React.createElement('li', null, 'item-3')
let lists = React.createElement('ul', null, list1,list2,list3)
let card = React.createElement('h1', null, 'My list', lists)


const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot);

root.render(card);


// APP FROM DOM

// const domRoot = document.getElementById('root');

// const listOne = document.createElement('li');
// listOne.textContent = 'item-1';

// const listTwo = document.createElement('li');
// listTwo.textContent = 'item-2';

// const listThree = document.createElement('li');
// listThree.textContent = 'item-3';

// const lists = document.createElement('ul');
// lists.classList.add('list-none');
// lists.appendChild(listOne);
// lists.appendChild(listTwo);
// lists.appendChild(listThree);

// const header = document.createElement('h1');
// header.classList.add('text-red', 'mb-5');
// header.textContent = 'Hi from JS-DOM!';

// const app = document.createElement('div');
// app.classList.add('text-center', 'mt-5');
// app.appendChild(header);
// app.appendChild(lists);

// domRoot.appendChild(app);