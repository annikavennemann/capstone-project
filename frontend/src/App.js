import {useEffect, useState} from 'react'
import getUserData from './service/getUserData'
import Registration from './components/Registration'

export default function App() {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    getUserData().then(userData => setUserData(userData))
  }, [])

  function addUser(user) {
    setUserData([...userData, user])
    getUserData()
  }


  return (
    <>
      <Registration onSubmit={addUser}/>
      
    </>
  );
}
