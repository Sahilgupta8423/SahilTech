import React, { useContext, useState } from "react";
import Sresult from './Sresult'
const Search = () => {
    const [img, setImg] = useState("")
    const inputEvent = (event) => {
        setImg(event.target.value)
        console.log(event.target.value)
    }
  return (
    <>
      <div className="searchbar">
          <input type='text' placeholder='Search Anything' onChange={inputEvent} value={img}></input>
      </div>
      {img === '' ? null : <Sresult name={img}></Sresult>}
      
    </>
  );
};
export default Search;
