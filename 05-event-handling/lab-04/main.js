

// จงสร้างลิงค์ <a> มีข้อความว่า “Google”
// เมื่อผู้ใช้ click link ให้ขึ้นคำถามว่า “Leave for https://google.com?”
// ถ้าผู้ใช้กด OK ให้ redirect ไปที่ https://google.com
// ถ้าผู้ใช้กด Cancel ให้ยกเลิก redirect ไปที่ https://google.com




function App() {
    const handleChange = (event) => {
      console.log(event.target.value);
    };
  
    return (
        <div className="container">
          <a href='https://www.google.co.th' onClick={handleChange}>Google</a>
        </div>

    );
  }

  


// ReacDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
