//Render

// Child
function UserCard({ name, age }) {
  return (
    <div>
      <h3>name : {name}</h3>
      <h3>age : {age}</h3>
    </div>
  );
}

// Parent
function App() {
  const users = [
    { id: 1, name: 'Louis', age: 23 },
    { id: 2, name: 'James', age: 22 },
    { id: 3, name: 'Lumos', age: 24 },
  ];
  return <div className="container">
    {users.map((person) => (
      <UserCard name={person.name} age={person.age} key={person.id} />
    ))}
  </div>;
}

// ReacDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
