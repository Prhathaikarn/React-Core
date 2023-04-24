// จงสร้าง Button มีข้อความว่า “Hide”
// เมื่อผู้ใช้ click button ให้ซ่อนข้อความและเปลี่ยนข้อความบน Button เป็น “Show” เมื่อ click button อีกครั้งให้แสดงข้อความและเปลี่ยนข้อความบน Button เป็น Hide



function App() {

    const [isShow, setIsShow] = React.useState(true)

    const handleToggle = () => 
        setIsShow(!isShow);
        // let text = isShow ? 'Click to hide text' : 'Click to show text'
        let text = `Click to ${isShow ? 'hide' : 'show'} text`;
    

  return (
    <div className="container">
      <button onClick={handleToggle}>{text}</button>
      {isShow && <h4>Text</h4>}
    </div>
  )
        
}

// ReacDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
