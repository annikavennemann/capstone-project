import {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Form from './components/Registration/Form'
import Login from './components/Login/Login'

export default function App() {
  const [userData, setUserData] = useState([])

  function addUser(user) {
    setUserData([...userData, user])
  }

  return (
    <Router>
      <main>
        <Switch>
          <Route path="/create-account">
            <Form onSubmit={addUser}/>
          </Route>
          
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}