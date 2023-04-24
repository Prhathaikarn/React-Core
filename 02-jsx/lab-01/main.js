
let fullName = 'P. H'
let birthYear = 1996;
let CURRENT_YEAR = 2023;


const App = (
    <>
    <h1>{fullName}</h1>
    <p>{CURRENT_YEAR - birthYear}</p> 
    <br />
    <img src="https://plus.unsplash.com/premium_photo-1680512467504-39224db53858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"></img>
    </>
);

const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot);

root.render(App)