// UI
// const header = React.createElement('h1', null, 'Hi from React')

const header = <h1>Hi from JSX</h1>

// Render
const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot);

root.render(header)


const arr = [1,12,3,4,5,]
