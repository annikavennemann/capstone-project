import {useState} from 'react'
import Form from './components/Registration/Form'
import Login from './components/Login/Login'

export default function App() {
  const [userData, setUserData] = useState([])

  function addUser(user) {
    setUserData([...userData, user])
  }

  return (
    <>
      <Form onSubmit={addUser}/>
      <Login />
    </>
  );
}