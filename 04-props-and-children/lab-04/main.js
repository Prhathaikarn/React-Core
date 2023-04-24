// จาก Lab ที่แล้วให้ส่ง props เข้าไปได้ค่าเดียว ชื่อ product 
// โดยที่ props ตัวนี้จะมี data type เป็น Object
// ให้ render ProductItem ในหน้า web 



function ProductItem(props) {
    const {name, price, description} = props;
    return (
        <>
            <h1>product : {name} </h1>
            <h2>price : {price} </h2>
            <p>description : {description} </p>
        </>
    )
}


function App() {
  return <div className="container">
    <ProductItem name={299} 
    // price={299} 
    // description='อะไรก็ได้จ้า'
     />
    </div>
}

// ReacDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
