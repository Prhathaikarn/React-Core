

function KeyPress ({content, styles}) {
    return (
        <div className='keypressOrg' style={styles}>
            {content}
        </div>
    )
}


function App() {
    let styleRed = {
        borderRadius: '0 0 20px '
    }
  return (
    <div className="container">
      <div className="calculator">
        <div className="item--1">0</div>
        <div className="item" id='darkGray'>AC</div>
        <div className="item" id='darkGray'>+/-</div>
        <div className="item" id='darkGray'>%</div>
        <div className="item" id='Orange'>/</div>
        <div className="item" id='lightGray'>7</div>
        <div className="item" id='lightGray'>8</div>
        <div className="item" id='lightGray'>9</div>
        <div className="item" id='Orange'>x</div>
        <div className="item" id='lightGray'>4</div>
        <div className="item" id='lightGray'>5</div>
        <div className="item" id='lightGray'>6</div>
        <div className="item" id='Orange'>-</div>
        <div className="item" id='lightGray'>1</div>
        <div className="item" id='lightGray'>2</div>
        <div className="item" id='lightGray'>3</div>
        <div className="item" id='Orange'>+</div>
        <div className="item--18" >0</div>
        <div className="item" id='lightGray'>.</div>
        <div className="item" id='lightGray'>←</div>
        <KeyPress content='=' styles={styleRed}/>
      </div>
    </div>
  );
}

// ReacDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
