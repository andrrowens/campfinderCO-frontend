import React from 'react';
import '../App.css';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import CampsiteContainer from './CampsiteContainer';
import CampsiteForm from './CampsiteForm';
import Header from './Header';
import ReviewContainer from './ReviewContainer';
import ReviewForm from './ReviewForm';
// import ReviewEditForm from './ReviewEditForm';
// import ReviewDelete from './ReviewDelete';
import Notification from './Notification';
// import UserForm from './UserForm';
// import { UserContext } from './UserContext';
import Signup from './Signup';
import AuthenticatedUser from './AuthenticatedUser';


function App() {

const [campsites, setCampsites] = useState([])
const [reviews, setReviews]= useState([])
const [message, setMessage]= useState("")

// const {fetchCurrentUser, user, setUser} = useContext(userContext)

// const [user, setUser] = useState(null);



useEffect(() => { // fetch campsites
  const fetchCampsites = async () => {
    try {
      const resp = await fetch("/campsites")
      const data = await resp.json()
      setCampsites(data)
    } catch (error) {
      alert(error)
    }
  }
  fetchCampsites()
}, [])

useEffect(() => { // fetch reviews
  const fetchReviews = async () => {
    try {
      const resp = await fetch("/reviews")
      const data = await resp.json()
      setReviews(data)
    } catch (error) {
      alert(error)
    }
  }
  fetchReviews()
}, [])



// useEffect(() => {
//   fetch("/authenticated_user").then((response) => {
//     if (response.ok) {
//       response.json().then((user) => setUser(user));
//     }
//   });
// }, []);

// if (user) {
//   return <h2>Welcome, {user.username}!</h2>;
//   } else {
//   return <Login onLogin={setUser} />;
//   };





// if (!user) return (
//   <>
//     {/* <Login updateUser={updateUser} /> */}
//   </>
// )

  return (
    <div className="App">
      <Notification message={message} setMessage={setMessage} />

       <Navbar />
        <Header/>
          <Switch>

            <Route path="/campsites">
              <CampsiteContainer campsites={campsites} setCampsites={setCampsites} />
              <CampsiteForm setCampsites={setCampsites} setMessage={setMessage} />
            </Route >

            <Route path="/reviews">
              <ReviewForm setMessage={setMessage} campsites={campsites} setReviews={setReviews} />
              <ReviewContainer setMessage={setMessage} reviews={reviews} setReviews={setReviews} />
              {/* <ReviewEditForm reviews={reviews} setReviews={setReviews} />
              <ReviewDelete reviews={reviews} setReviews={setReviews} /> */}
            </Route>

            <Route path="/signup">
                <Signup />
            </Route>

            {/* <Route path="/logout">
                <Navbar /> 
            </Route> */}

            <Route path="/authenticated_user">
               <AuthenticatedUser /> 
            </Route>

          </Switch>
     </div>
  )
}

export default App;
