// ให้สร้างตัวแปร Array เก็บข้อมูล Post ที่เป็น Object มี key คือ id, message, วันที่ Post, ชื่อคนโพสต์
// นำ ArrayPost มา Render ใน list แล้วแสดงบนหน้า UI

function App() {
  const arr = [
    { id: '16099', message: 'Post1', date: '1-Jan-2023', name: 'Jim' }];
    
  const list = arr.map((el) => <li key={el.id}>{el.name}</li>);

  return <ul>{list}</ul>;
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
