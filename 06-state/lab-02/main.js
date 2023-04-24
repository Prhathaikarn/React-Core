// จงสร้าง Button มีข้อความว่า “Click to hide text”
// เมื่อผู้ใช้ click button ให้ซ่อน Text

function App() {
  const [isShow, setIsShow] = React.useState(true);

  const handleClickTohideText = () => {
    setIsShow(false);
  };

  return (
    <div className="container">
      <button onClick={handleClickTohideText}>Click</button>
      {isShow && <h1>Text</h1>}
    </div>
  );
}

// ReacDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
