function App() {
  return (
    <div className="container">
      <div className="box">
        <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_518,c_limit/68b0ba7b-a352-4ed1-a0e9-2df11a68b693/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-max-sc-se-mVqXvN.png" />
        <h6>Nike Air Max SC SE</h6> 
        <p>รองเท้าผู้หญิง</p>
        <p>2 สี</p>
        <span>$3,000</span>
      </div>

      <div className="box">
        <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_436,c_limit/4629f759-242f-4709-95f0-066fecf999c8/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-court-vision-low-3JRH8h.png" />
        <h6>Nike Court Vision Low</h6> 
        <p>รองเท้าผู้ชาย</p>
        <p>2 สี</p>
        <span>$2,100</span>
      </div>

      <div className="box">
        <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_436,c_limit/cf4a5556-6163-4abf-9b83-0f89b4766100/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-court-legacy-PKg8wX.png" />
        <h6>Nike Court Legac </h6> 
        <p>รองเท้าผู้ชาย</p>
        <p>2 สี</p>
        <span>$2,400</span>
      </div>
    </div>
  );
}

// ReacDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
