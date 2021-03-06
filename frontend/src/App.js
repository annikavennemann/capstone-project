import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import RegisterForm from './components/Registration/RegisterForm'
import Login from './components/Login/Login'
import Checklist from './components/Checklist/Checklist'
import Home from './components/Home/Home'
import Logout from './components/Navigation/Logout'

export default function App() {
  const [userData, setUserData] = useState([])

  function addUser(user) {
    setUserData([...userData, user])
  }

  return (
    <>
      <Switch>
        <Route path="/create-account">
          <RegisterForm onSubmit={addUser} />
        </Route>

        <Route path="/checklist">
          <Checklist />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/ohhhrevoir">
          <Logout />
        </Route>

        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </>
  )
}
