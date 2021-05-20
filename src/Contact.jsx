import React, { useState } from "react";
const Contact = () => {
    const [data, setdata] = useState({
        fullname:"",
        phone:"",
        email:'',
        message:""
    })
    const inputEvent =(event) => {
const {name, value} = event.target
setdata((preVal) => {
    return {...preVal, [name] : value}
})
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Thank You ${data.fullname}, Your response has been submitted.`)
    }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Full Name" required
                name='fullname'
                value={data.fullname}
                onChange={inputEvent}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Phone
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Phone Number" required
                name='phone'
                value={data.phone}
                onChange={inputEvent}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com" required
                name='email'
                value={data.email}
                onChange={inputEvent}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name='message'
                value={data.message}
                onChange={inputEvent}
              ></textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Submit 
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default Contact;
