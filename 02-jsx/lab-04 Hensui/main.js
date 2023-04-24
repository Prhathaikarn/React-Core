const App = (
  <div className="main">
    <div className="main__left">
      <img src="./banner.png" className="main__left--img" />
    </div>
    <div className="main__right">
      <div>
        <div className="main__right--content">
          Discover authentic Japanese cuisine in LA. Opening Soon!
        </div>
        <div className="text__right--content">
          {" "}
          Welcome to Hensui, the newest addition to the vibrant Los Angeles
          dining scene! Our restaurant is dedicated to bringing you the most
          authentic and delicious Japanese cuisine. Stay tuned for our grand
          opening date, sign up with your e-mail address to get notified.{" "}
        </div>
        <div>
          <input className="input__right--content" placeholder="e-mail"></input>
          <button className="btn__right--content">SUBMIT</button>
        </div>
      </div>
    </div>
  </div>
);

// Render
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(App);
