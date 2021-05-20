import React from "react";
import {NavLink} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
const Error = () => {
    const history = useHistory()
  return (
    <>
      <h1>Sorry, Error 404 Page not found</h1>
      <button onClick={() => {history.goBack()}}>Go Back</button>
      <NavLink to='/contact'>Go Back</NavLink>

    </>
  );
};
export default Error;
