import { createContext, useState, useEffect } from "react";

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch("/authenticated_user")
        .then((res) => {
            if (res.ok) {
                res.json()
                .then((users) => {
                    setUsers(users);
                });
            } else {
                res.json()
                .then((errorObj) => alert(errorObj.errors))
            }
        })
    }, []);

    const handleLogin = (e, formData) => {
        e.preventDefault()
        console.log(formData)
        fetch("/login", {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => {
            if (resp.ok) {
                resp.json().then(usersObj => {
                    setUsers(usersObj)
                    alert("User Logged In")
                })
            }   else {
                resp.json().then(messageObj => alert(messageObj.error))
            }
        })    
    }

    return (
        <UserContext.Provider value={{users, setUsers, handleLogin}} >
            {children}
        </UserContext.Provider>
    )
}
 
export {UserContext, UserProvider}
