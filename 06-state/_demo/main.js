

function App() {
    // let count = 0;

    const [count, setCount] = React.useState(0)
    const [toggle, setToggle] = React.useState(true)

    const handleClick = () => {
        // count =  9;
        let newState = count + 1;
        setCount(newState);
        setToggle(!toggle)
        // console.log(count)
    }

    return (
        <div className='container'>
            State : {toggle && 'Hello'}
            <button onClick={handleClick}>Click Click</button>
            <p>{count}</p>
        </div>
    )
}



// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);