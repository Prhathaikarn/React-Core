// ให้สร้าง Component ชื่อ Profile
// ใน Component ประกอบด้วย
// tag <h1> แสดงชื่อ John Doe
// tag <h2> แสดงอายุมีค่าเท่ากับ 27
// - ให้ render Profile ในหน้า web


function Profile(props) {
    const {name, age} = props;
    return (
        <>
            <h2>fullName : {name} </h2>
            <h3>age : {age} </h3>
        </>
    )
}


function App() {
  return <div className="container">
    <Profile name='John Doe' age={29} />
    </div>
}

// ReacDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
