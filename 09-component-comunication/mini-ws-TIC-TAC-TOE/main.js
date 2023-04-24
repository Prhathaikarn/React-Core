// ทำ UI สำหรับเกม tic-tac-toe
// สามารถบอกได้ว่าตาใครกำลังเล่น
// Player : X , Player O (UI ทำเพิ่มจาก design ใต้ปุ่ม reset)
// จบเกมบอกว่าใครชนะ (UI ทำเพิ่มจาก design ใต้ปุ่ม reset)
//     -Reset เกมได้
// Challenge : มีการเก็บสถิติว่าใครชนะกี่ครั้งพร้อมแสดงผล

function KeyPress({ additionClass, value, onClick, index }) {
  return (
    <div className={`keypress ${additionClass}`}>
      <button onClick={() => onClick(index)}>{value}</button>
    </div>
  );
}

function App() {
  let styleObj = {};
  const [board, setBoard] = React.useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  console.log(board);

  const handleOnClick = (index) => {
    console.log(index);
    const newBoard = [...board];
    newBoard[index] = 'x';
    setBoard(newBoard);
  };

  
  
  return (
    <div class="allbox">
      <div className="box">
        {board
          .map((el, index) => {
            return (
              <KeyPress onClick={handleOnClick} index={index} value={el} />
            );
          })
          .slice(0, 3)}
      </div>
      <div className="box">
        {board
          .map((el, index) => {
            return (
              <KeyPress onClick={handleOnClick} index={index} value={el} />
            );
          })
          .slice(3, 6)}
      </div>
      <div className="box">
        {board
          .map((el, index) => {
            return (
              <KeyPress onClick={handleOnClick} index={index} value={el} />
            );
          })
          .slice(6, 9)}
      </div>
    </div>
  );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
