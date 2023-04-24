// จงสร้าง checkbox ขึ้นมา 3 อัน ให้แต่ละอันมี name คือ phoneBrand
// เมื่อผู้ใช้ tick หรือ untick checkbox ให้ console.log
// ค่า name ของ checkbox
// ค่า value ของ checkbox
// checkbox นั้นถูก tick หรือ untick

// Render

function App() {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckBox = (e) => {
    console.log(e.target.checked);
    setIsChecked(e.target.checked);
  };

  return (
    <div className="container">
      <form onClick={handleCheckBox}>
        <div>
          <label htmlFor="phoneBrand">iPhone </label>
          <input
            type="checkbox"
            id="phoneBrand"
            onChange={handleCheckBox}
            checked={isChecked}
          />
        </div>
      </form>
    </div>
  );
}

// ReacDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
