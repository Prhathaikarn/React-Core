
function App () {
    const [range, setRange] = React.useState()
    const [option,setOption] = React.useState()
    const [isChecked, setIsChecjed] = React.useState()

    const handleChange = (e) => {
        console.log(e.target.value)
        setRange(Number(e.target.value))
    }
    const handleSelect = (e) => {
        console.log(e.target.value)
        setOption(e.target.value)
    }


    return (
        <div className='container'>
            input, Form
            <div>
                <input type='range' onChange={handleChange} value={range}></input>
            </div>
            <select>
                <option>Option-1</option>
                <option>Option-2</option>
                <option>Option-3</option>
            </select>
        </div>
    )
}




// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);