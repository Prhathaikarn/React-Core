
// จงสร้าง tag <select> ซึ่งมีข้อมูลชื่อประเทศในรายการให้เลือก (ให้ลองใส่มา 5 ประเทศ)
// เมื่อผู้ใช้เลือกประเทศ ให้ console.log ค่าประเทศที่ถูกเลือก

function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="container">

      <select onChange={handleChange}>
        <option>THAILAND</option>
        <option>JAPAN</option>
        <option>TAIWAN</option>
        <option>CHINA</option>
      </select>
      
    </div>
  );
}

// ReacDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
