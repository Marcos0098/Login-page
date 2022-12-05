import { useState } from 'react'
import './App.css'

function App() {

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");


  function loginCheck(e){
    e.preventDefault();
  }

  console.log(login);
  console.log(password);

  return (
    <div className="App">
      <div className='test'>
        <div className='login-container'>
          <form onSubmit={loginCheck}>
            <input type="text" placeholder='Login' value={login} onChange={(e) => setLogin(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value={"Login"} />
          </form>

        </div>
      </div>

    </div>
  )
}

export default App
