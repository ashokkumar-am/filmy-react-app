import './App.css';
// import Navbar from './components/Navbar';
// import Movie from './pages/Movie'
import Create from './pages/Create'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <div className='App'>
      <header>
        <p>ab</p>
        {/* <h1>Register Page</h1> */}
      </header>
      {/* <Navbar /> */}
      {/* <Movie /> */}
      <Login />
      <Signup />
      <Create />
    </div>
  );
}

export default App;
