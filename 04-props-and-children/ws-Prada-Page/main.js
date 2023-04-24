function App() {
  return (
    <div className="container">
      <div className="box">
        <h6>ไอคอน</h6> 
          <p>Air Force 1 </p>
          <p>Huarache</p>
          <p>Air Max 90</p>
          <p>Air Max 95</p>
      </div>

      <div className="box">
        <h6>รองเท้า</h6> 
        <p>รองเท้าทั้งหมด</p>
        <p>รองเท้าออกแบบเอง</p>
        <p>รองเท้า Jordan</p>
        <p>รองเท้าวิ่ง</p>
      </div>

      <div className="box">
        <h6>เสื้อผ้า</h6> 
        <p>เสื้อผ้าทั้งหมด</p>
        <p>ชุดสุภาพ</p>
        <p>เสื้อมีฮู้ดและเสื้อแบบสวม</p>
        <p>เสื้อ</p>
      </div>

      <div className="box">
        <h6>สำหรับเด็ก</h6> 
        <p>รองเท้าทารกและเด็กวัยหัดเดิน</p>
        <p>รองเท้าเด็ก</p>
        <p>รองเท้าเด็ก Jordan</p>
        <p>รองเท้าบาสเก็ตบอลเด็ก</p>
      </div>

    </div>
  );
}

// ReacDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
