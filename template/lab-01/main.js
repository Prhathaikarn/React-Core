

function Profile(props) {
    const {name, age} = props;
    return (
        <>
            <h2>fullName : {name} </h2>
            <h3>age : {age} </h3>
        </>
    )
}


function App() {
  return <div className="container">
    <Profile name='John Doe' age={29}></Profile>
    </div>
}

// ReacDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
