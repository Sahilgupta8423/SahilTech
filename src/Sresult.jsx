import React from "react";
const Sresult = (props) => {
  const img = `https://source.unsplash.com/user/erondu/300x300/?${props.name}`;
  console.log(img)
  return (
    <>
      <div className='result'>
          <img src={img} />
      </div>
    </>
  );
};
export default Sresult;
