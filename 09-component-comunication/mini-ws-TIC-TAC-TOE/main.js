// ทำ UI สำหรับเกม tic-tac-toe
// สามารถบอกได้ว่าตาใครกำลังเล่น
// Player : X , Player O (UI ทำเพิ่มจาก design ใต้ปุ่ม reset)
// จบเกมบอกว่าใครชนะ (UI ทำเพิ่มจาก design ใต้ปุ่ม reset)
//     -Reset เกมได้
// Challenge : มีการเก็บสถิติว่าใครชนะกี่ครั้งพร้อมแสดงผล

function App() {
  const Int_Board = {
    a1: '',
    a2: '',
    a3: '',
    b1: '',
    b2: '',
    b3: '',
    c1: '',
    c2: '',
    c3: '',
  };

  const initialTitle = 'TIC - TAC - TOE';

  const [turn, setTurn] = React.useState(true);
  const [isWin, setIsWin] = React.useState(false);
  const [board, setBoard] = React.useState(Int_Board);
  const [title, setTitle] = React.useState(initialTitle);
  const handleToggle = () => setBoard(!board);
  const BtnRest = (e) => {
    setBoard(Int_Board);
    setIsWin(false);
    setTitle(initialTitle);
  };

  const updateBoard = (e) => {
    // console.log('xxx --->',e.target.name)

    // check availble or not
    if (board[e.target.name] === '' && isWin !== true) {
      console.log('empty !!');

      // check if turn == true --> 'X' turn
      // check if turn == false --> 'O' turn
      let player;
      player = turn ? 'X' : 'O';

      // update board
      setBoard({ ...board, [e.target.name]: player });
      // dummy value for current round
      let tempBoard = { ...board, [e.target.name]: player };

      win.forEach((el) => {
        console.log('to win', tempBoard[el[0]]);
        console.log('to win', tempBoard[el[1]]);
        console.log('to win', tempBoard[el[2]]);
        console.log('--------------- turn ', player);
        if (
          player === tempBoard[el[0]] &&
          player === tempBoard[el[1]] &&
          player === tempBoard[el[2]]
        ) {
          console.log(`----> player ${player} win !`);
          // setBoard(Int_Board)
          setIsWin(true);
          setTitle(`Player ${player} win !`);
        }
      });

      // toggle between turn
      setTurn(!turn);
    } else {
      console.log('already placed !!');
    }
    console.log('on click');
  };

  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="container-xo">
        <button className="buttonxo" name="a1" onClick={updateBoard}>
          {board.a1}
        </button>
        <button className="buttonxo" name="a2" onClick={updateBoard}>
          {board.a2}
        </button>
        <button className="buttonxo" name="a3" onClick={updateBoard}>
          {board.a3}
        </button>
        {/* {isShow && <h4 ></h4>} */}
      </div>
      <div className="container-xo">
        <button className="buttonxo" name="b1" onClick={updateBoard}>
          {board.b1}
        </button>
        <button className="buttonxo" name="b2" onClick={updateBoard}>
          {board.b2}
        </button>
        <button className="buttonxo" name="b3" onClick={updateBoard}>
          {board.b3}
        </button>
        {/* {isShow && <h4 ></h4>} */}
      </div>
      <div className="container-xo">
        <button className="buttonxo" name="c1" onClick={updateBoard}>
          {board.c1}
        </button>
        <button className="buttonxo" name="c2" onClick={updateBoard}>
          {board.c2}
        </button>
        <button className="buttonxo" name="c3" onClick={updateBoard}>
          {board.c3}
        </button>
      </div>
      {/* {isWin && <button onClick={BtnRest}> RESET</button>} */}
      <button className='reset' onClick={BtnRest}> Reset</button>
    </div>
  );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

const win = [
  ['a1', 'a2', 'a3'],
  ['b1', 'b2', 'b3'],
  ['c1', 'c2', 'c3'],
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3'],
  ['a1', 'b2', 'c3'],
  ['a3', 'b2', 'c1'],
];
