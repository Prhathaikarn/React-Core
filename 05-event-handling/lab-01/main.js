

// จงสร้าง tag <input>
// เมื่อผู้ใช้พิมพ์ค่าลงใน <input> ให้ console.log(ค่าที่ผู้ใช้พิมพ์)




function App() {
    const handleChange = (event) => {
      console.log(event.target.value);
    };
  
    return (
        <div className="container">
            <input onChange={handleChange}></input>
        </div>

    );
  }

  


// ReacDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
