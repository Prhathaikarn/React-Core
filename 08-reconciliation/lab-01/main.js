// ให้สร้างตัวแปร Array เก็บชื่อเพื่อน
// นำ Array ชื่อเพื่อนมา Render ใน list แล้วแสดงบนหน้า UI


function App() {
  const arr = ['Jack', 'John', 'Jim'];
  const list = arr.map((el, idx) => <li key={idx}> {el} </li>);
  return (
    <div className="container">
      <ul>{list}</ul>
    </div>
  );
}

// ReacDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
