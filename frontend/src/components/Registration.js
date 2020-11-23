import { useState } from 'react'

export default function Registration({ onSubmit }) {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        startdate: '',
    })

    
    return (
        <form onSubmit={registerUser}>
            <label htmlFor="firstname">
                First name
                <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    onChange={onChange}
                    value={userData.firstname}
                />
            </label>

            <label htmlFor="lastname">
                Last name
                <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    onChange={onChange}
                    value={userData.lastname}
                />
            </label>

            <label htmlFor="email">
                Email
                <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={userData.email}
                />
            </label>

            <label htmlFor="password">
                Password
                <input
                    id="password"
                    type="password"
                    name="password"
                    onChange={onChange}
                    value={userData.password}
                />
            </label>

            <label htmlFor="startdate">
                Start date
                <input
                    id="startdate"
                    type="date"
                    name="startdate"
                    onChange={onChange}
                    value={userData.startdate}
                />
            </label>

            <button onClick={registerUser}>Register User</button>
        </form>
        
    )

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     onSubmit(userData)
    //     console.log(userData)
    // }

    function onChange(event) {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    
    // @TODO: implement fetch-post

    function registerUser(event) {
        event.preventDefault();

        //console.log(userData)
    
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
    
        var raw = JSON.stringify(userData
            // {
            // firstname: "Annika",
            // lastname: "Vennemann",
            // email: "annivenne@ohhh.org",
            // password: "hellooooh",
            // startdate: "2021-01-01"
            // }
        );
    
        console.log(raw)
    
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow',
        };
    
        fetch('http://onboarding.local/user', requestOptions)
            .then((response) => response.text())
            .then(result => console.log(result))
            .catch((error) => console.log('error', error));
      }

   
}