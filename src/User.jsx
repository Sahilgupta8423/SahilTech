import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
//  const User = ({match}) => {
//      return(<><h1>User {match.params.name} Page</h1> </>)
//  }
const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  const history = useHistory()
  console.log(history);
  return (
    <>
      <h1>
        User {fname} {lname}  Page
      </h1>
      <p>My current location is {location.pathname}</p>
      {location.pathname === `/user/sahil/gupta` ? (<button onClick={() => {history.goBack()}}>Go Back</button>) : null}
    </>
  );
};
export default User;
