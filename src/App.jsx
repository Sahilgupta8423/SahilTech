import React, { createContext, useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
// import { Search, Title } from "@material-ui/icons";
import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from './Footer'


// import Heading from './Heading'
// import Para from './Para'
// import Ol from './Ol'
// function App(){
//     return (
//         <>
//         <Heading></Heading>
//         <Para></Para>
//         <Ol></Ol>
//         <Para></Para>
//         </>
//     )
// }

// function App() {
//     var date = new Date();
//     var time = date.getHours();
//     var a;

//     if (time >= 0 && time < 12) {
//         a = "Good Morning";
//     }
//     else if (time >= 12 && time < 19) {
//         a = "Good Afternoon";
//     }
//     else {
//         a = "Good night";
//     }
//     return (
//         <>
//             <h1 contentEditable="true">Hello Sir, {a}</h1>
//         </>
//     )
// }
// function App() {
//    return( <>
//     <ul>
//     <li>{add(100,3)}</li>
//     <li>{sub(10,3)} </li>
//     <li>{div(10,3)}</li>
//     <li>{mul(10,3)}</li>
//     </ul>
//     </>)
// }
// const favSeries = 'Netflix';
// const FavS = () => {
// if(favSeries==='Netflix'){
//   return ( <Card
//     key={Sdata[1].id}
//     imgsrc={Sdata[1].imgsrc}
//     title={Sdata[1].title}
//     sname={Sdata[1].sname}
//     link={Sdata[1].link}
//   ></Card>)
// }else{

// }
// }
// const App = () => (<>
//   <h1 className='heading_style'>List of Top 5 Netflix Series</h1>
//    <FavS></FavS>

//   </>)
// export default App

// const SlotM = (props) => {
//   let x = props.x
//   let y = props.y
//   let z = props.z
//   if(x===y && y===z){
//     return (<>
//     <div className='slot_inner'>
//       <h1 className='head'>
//         {x}{y}{z}
//       </h1>
//       <h1>This is matching</h1>
//       <hr></hr>
//     </div>
//     </>)
//   }
//   else{
//     return(<>
//     <div className='slot_inner'>
//       <h1 className='head'>
//         {x}{y}{z}
//       </h1>
//       <h1>This is not matching</h1>
//       <hr></hr>
//     </div>
//     </>)
//   }
// }
// const App = () => {
//   return <>
//   <h1 className='Heading_style'> 🎰 Welcome to <span style={{ fontWeight:'bold' }} >Slot Machine Game</span> 🎰 </h1>
//   <div className='slotmachine'>
//   <SlotM x = '😃' y = '😃' z = '😃' ></SlotM>
//   <SlotM x = '💙'  y = '😃' z = '😃'></SlotM>
//   <SlotM x = '😃' y = '🖤'  z = '😃'></SlotM>
//   </div>
//   </>;
// };
// export default App

// const App = () => {
//   const state = useState()
//   console.log(state)
//   let ctime = new Date().toLocaleTimeString();
//   const [cTime, setCTime] = useState(ctime)
//   const updateTime = () => {
//     let Ctime = new Date().toLocaleTimeString();
//     setCTime(Ctime);
//   }
//   setInterval(updateTime,1000);

//   return (<>
//   <h1 className='head'>{ctime}</h1>

//   </>)
// }

// const App = () => {
//   const purple = "#8e44ad"
//   const [bg, setBg] = useState(purple)
//   const [name, setName] = useState('Click me')
//   const bgChange = () => {
//    let newBg = '#34495e';
//    setBg(newBg)
//    setName('Hello')
//   }
//   return (<>
// <div style = {{backgroundColor:bg}}> <button onClick={bgChange}>{name}</button></div>
//   </>)
// }

// const App = () => {
//   const [inputList, setInputList] = useState()
//   const [items, setItems] = useState([])
//   const itmeEvent = (event) => {
//    setInputList(event.target.value)
//   }
//   const listOfItems = () => {
//     console.log('clicked')
//     setItems((oldItems) => {
//       return [...oldItems, inputList ]
//     })
//     setInputList('')
//   }
//   const deleteItem = (id) => {
//     console.log('dlete')
//     setItems((oldItems) => {
//       return oldItems.filter((arrElem, index) => {
//         return index !== id;
//       })
//     } )
//   }
//   return (<>
//   <div className='main_div'>
//     <div className='center_div'>
//       <br></br>
//       <h1>ToDo List</h1>
//       <br></br>
//       <input type='text' value={inputList} placeholder='Add a item' onChange={itmeEvent}></input>
//       <button onClick={listOfItems}>+</button>

//       <ol>
//       {items.map((itemVal, index) => {
//        return <ToDoList key={index} id={index} text={itemVal} onSelect={deleteItem}></ToDoList>
//       })}
//       </ol>
//       </div>
//   </div>
//   </>)
// };

// Challange
// const App = () => {
//   let intialVal = 0;
//   const [num, setNum] = useState(0);

//   const incValue = () => {
//     setNum(num + 1);
//   };
//   const decValue = () => {
//     if (num > 0) {
//       setNum(num - 1);
//     } else {
//       alert("sorry, zero limit");
//     }
//   };
//   return (
//     <>

//     </>
//   );
// };
// import CompA from "./CompA";
// import CompB from "./CompB";
// import CompC from "./CompC";
// const FirstName = createContext();
// const LastName = createContext();
// const App = () => {
//   return (
//     <>
//     <FirstName.Provider value={'Sahil'}>
//       <LastName.Provider value={'Gupta'}>
//       <CompA/>
//       </LastName.Provider>
//       </FirstName.Provider>
//     </>
//   );
// };

// const App = () => {
//   const [num, setNum] = useState(0)
//   useEffect(() => { document.title = `You clicked me ${num} times` })
//   return(<>
//   <button className='btn btn-dark mt-3 ml-3'  onClick={() => {setNum(num+1)
//  }}>Click Me {num}</button>
//  <p>Hello World</p>
//   </>)
// }

// import About from "./About";
// import Contact from "./Contact";
// import Menu from './Menu'
// import Service from './Service'
// import User from './User'
// import Search from './Search'
// import Error from './Error'
// const Name = () => {
//   return <h1>Hello, This is name page</h1>
// }
// const App = () => {
//   return (
//     <>
//     <Menu />
//       <Switch>
//         <Route exact path="/" component={() => <About name='AboutUs' /> } />
//         <Route exact path="/contact" render={() => <Contact name='Contact' />} />
//         <Route exact path="/search" component={Search} />
//         <Route exact path="/service" component={Service} />
//         <Route path="/user/:fname/:lname" component={User} />
//         <Route path="/contact/name" component={Name} />
//         <Redirect to='/' />
//       </Switch>
//     </>
//   );
// };


const App = () => {
  return (
    <>
    <Navbar></Navbar>
    
    <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/about' exact component={About}></Route>
      <Route path='/service' exact component={Service}></Route>
      <Route path='/contact' exact component={Contact}></Route>
      <Redirect to='/'></Redirect>
      </Switch>
      <Footer></Footer>
    </>
  );
};
export default App;
