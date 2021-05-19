import './App.css';
// import Login from './components/Login';
import Register from './components/Signup'
// import Create from './components/Create'
import Movie from './components/Movie';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Register Page</h1>
        <h2>learn react</h2>
      </header>
      <Register />
      {/* <Login /> */}
      {/* <Create /> */}
      <Movie />
    </div>
  );
}

export default App;
