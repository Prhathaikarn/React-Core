// ให้สร้าง Component ชื่อ ProductItem
// ใน Component แสดงข้อมูลดังนี้
// tag <h1> แสดงชื่อ product
// tag <h2> แสดง price ของ product
// tag <p> แสดง description ของ product
// ชื่อ price และ description ของ product ถูกส่งมาทาง props
// - ให้ render ProductItem ในหน้า web โดยให้ส่งค่า props ทั้งสามเป็นค่าอะไรก็ได้ 


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
    <ProductItem name='what' price={299} description='อะไรก็ได้จ้า' />
    </div>
}

// ReacDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
