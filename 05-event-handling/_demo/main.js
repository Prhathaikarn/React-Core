

function App() {
  const handleClick = () => {
    console.log("Click");
    // return 5;
  };

  return (
    <div className="container">
      <h1>Event Handler</h1>
      <button onClick={handleClick}>Click ME</button>
    </div>
  );
}





// Render
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
