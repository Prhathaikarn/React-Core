
// จงสร้าง Button มีข้อความว่า “Click to hide me”
// เมื่อผู้ใช้ click button ให้ซ่อน button



function App() {

    const [isShow, setIsShow] = React.useState(true)

    // setIsShow(false)
    // let isShow = true

    const handleClickTohide = () => {
        setIsShow(false);
    }

  return (
    <div className="container">
        <div>{isShow && <button onClick={handleClickTohide}>Click to Hide me</button>}</div>
    </div>
  )
        
}

// ReacDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
