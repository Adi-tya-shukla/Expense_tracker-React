import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageRoutes from './Components/Routes/PageRoutes';
import { Fragment } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchUserData,logOut } from './Components/Store/USerAction';
import { fetchExpense } from './Components/Store/ExpenseAction';
import  { userAction } from './Components/Store/UserSlice';
function App() {

  const dispatch = useDispatch()
  dispatch(userAction.setLogin());
  const loggedIn = useSelector((state) => state.userInfo.isLoggedIn)
  const token = useSelector((state) => state.userInfo.token)
  const email = useSelector((state) => state.userInfo.email)

  
  useEffect(() => {
    if (email && token) {
      dispatch(fetchUserData(token));
      dispatch(fetchExpense(email))
    }
  }, [token, email,dispatch])

  const autoLogout = () => {
    console.log('autologout called');
    dispatch(logOut());
  };

  useEffect(() => {
    let logoutTimer;
    if (token) {

      logoutTimer = setTimeout(() => {
        autoLogout();
      }, 10 * 60 * 1000);
    }
    return () => clearTimeout(logoutTimer);
  }, [token ])


  return (
    <Fragment>
      <Router>
        <PageRoutes loggedIn={loggedIn}/>
      </Router>
    </Fragment>

  );
}

export default App;
