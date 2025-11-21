import React from "react";
import ReactDOM from "react-dom";
// import Anitha from './task.js';
import Img from './images/jezanya';


function App(){
  return(
    <div>
         <h1 style={{color:"red",textAlign:"center"}}>Welcome</h1>
         <p>Hai how are you.?</p><br></br>
         <hr></hr>
         <h2>Learning react js</h2>
         <p>A paragraph is a self-contained unit of writing<br></br> that develops a single idea or topic. I<br></br>t typically consists of several sentences and is <br></br>usually indicated by an indent at the beginning of the first s<br></br>entence. Paragraphs help to organize and structure text,<br></br> making it easier for readers to follow the author's train of thought
         </p>
         <a href="#">Linked</a>
         <img src={Img} />

         {/* <Anitha />     */}
     
     </div>   
     
  )
}
export default App;


























// import * as React from "react";
// import Table from './component/table';
// import Use from "./component/usecard";
// // import ReactDOM from 'react-dom';
// import  {BrowserRouter,Routes,Route} from "react-router-dom";
// import UserDetails from './component/home1';
// import About from './component/about1';
// import  StyleElement from "./component/clock";

// import { useState } from "react";
// import Login from "./component/red";
// import Rose from "./component/rose";
// import { createContext } from "react";


//  function Ani() 
// {
 
//   return(
//       <div>
//         <Login name="Anitha" />
//     </div>
    
       
//   );
// }
// export default Ani;











// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { incrementByValue, decrementByValue } from "./component/actions";
  
// const App = () => {
//   const count = useSelector((state) => state.count); 
//   const dispatch = useDispatch(); 

//   const [inputValue, setInputValue] = useState(0); 
//   return (
//     <div>
//       <h2>Redux Counter with Payload</h2>
//       <p>Count: {count}</p>
//       <input
//         type="number"
//         value={inputValue}
//         onChange={(e) => setInputValue(Number(e.target.value))}
//       />
//       <button onClick={() => dispatch(incrementByValue(inputValue))}>
//         Increment by Value
//       </button>
//       <button onClick={() => dispatch(decrementByValue(inputValue))}>
//         Decrement by Value
//       </button>
//     </div>
//   ); 
// };

// export default App;
 












// import GetName from "./component/GetName";
// import DisplayName from "./component/DisplayName";
// import { useState, createContext } from "react";


// export const AppContext = createContext(null);

// export default function App(){

//     const [name,setName] = useState('')
//     return (
//         <div className = "App">
//             <div>
//                 <h1>UseContext React Hook</h1>
//             </div>
//             <AppContext.Provider value={{name,setName}}>
//                 <GetName />
//                 <br /> <br />
//                 <DisplayName />
//             </AppContext.Provider>
//         </div>
//     );
// }









// import { useState,useEffect } from "react";
// // import './Employee.css';

// function Ani() {
//     const[currentTime,setCurrentTime]=useState(new Date());
// useEffect(()=>{
//     const timer=setInterval(() => {
//         setCurrentTime(new Date());
//     },1000);
//     return()=>clearInterval(timer);
// },[]);    

// const formatTimeWithLeadingZero = (num) => {
//     return num < 10 ? `0${num}` : num;
// };

// const formatHour=(hour)=>{
//     return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
// };

// const formatDate=(date)=>{
//     const options = { weekday: "long", year: "numeric", month: "long", day: "numeric"  };
//     return date.toLocaleDateString(undefined, options);
// };

// return(
//     <>
//     <div className="digital-clock">
//         <h1>Digital clock</h1>
//         <div className="time">
//         {formatTimeWithLeadingZero(formatHour(currentTime.getHours()))}
//        :{formatTimeWithLeadingZero(currentTime.getMinutes())}
//        :{formatTimeWithLeadingZero(currentTime.getSeconds())}
//        {currentTime.getHours() >= 12 ? "PM" : "AM" }
//        </div>
//         <div className="date">{formatDate(currentTime)}</div>
//         </div>
//         </>
// );
// }
// export default Ani;



























// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ApiGet = () => {
// const [data, setData] = useState(null);

// useEffect(() => {
// const fetchData = async () => {
// try {
// const response = await
// axios.get('http://handt.llca.in/v2/common/getmaster');
// console.log(response.data);
// setData(response.data.data);
// } catch (error) {
// console.error("Error fetching the data", error);
// }
// };

// fetchData();
// }, []);

// return (
// <>
// {data && (
// <div>
// <h1>hi</h1>
// <label>

// {JSON.stringify(data)}
// </label>
// </div>
// )}
// </>
// );
// };

// export default ApiGet;































// import { Link } from 'react-router-dom';
// export default function Home() {
//     return (
//         <>
//         <main>
//             <h2>Welcome to the home page.!!</h2>
//             <p>You can do this, i believe in you</p>
//         </main>
//         <nav>
//             <Link to="/about">About</Link>
//         </nav>
//         </>
//     );
// }





































// function Appp() {
//   const student =[{value: 1, name: "John", age: 25, email:"john.example@tutorialspoint.com"},
//       {value: 1, name: "Peter", age: 15, email:"peter.example@tutorialspoint.com"},
//       {value: 1, name: "Olivia", age: 23, email:"olivia.example@tutorialspoint.com"}
//   ];
//   return (
//       <Table items={student}  />
//   );
// }
// export default Appp;








































































































// // import Counter from "./component/counter";
// // import { BrowserRouter,Routes,Route } from "react-router-dom";
// // import Sa from "./component/sa";
// // function App()
// // {
// //     return (
// //         <div className="app">
// // <h1>kjkjkjkj</h1>
// // <BrowserRouter>
// // <Routes>
// //     <Route path="/" element={<Counter/>} />
// //     <Route path="/about" element={<Sa/>} />
// // </Routes>
// // </BrowserRouter>
// //         </div>
// //     );
// // }
// // export default App;











// // import Home from "./component/home";
// // import About from "./component/about";

// // import * as React from 'react';
// // import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // function  App() {
// //     return (
// //         <div>
// //         <h1>Welcome to React Router</h1>
// //         <BrowserRouter>
// //         <Routes>
// //         <Route path='/' element={<Home />} />
// //         <Route path='/about' element={<About />} />
// //         </Routes>
// //         </BrowserRouter>
// //         </div>
// //     );
    
// // }
// // export default App;



































// // import Arraysample from "./component/Employee";
// // function App(){
// //     const item = [
// //         { id:1, name:"item1"},
// //         { id:2, name:"item2"},
// //         { id:3, name:"item3"}
// //     ];
// //     return (
// //         <>
// //         <Arraysample item={item} />
// //         </>
// //     );
// // }
// // export default App;







// //  import InputChange from "./component/counter";
// // import MyComponent from "./component/counter";
// // // import MyForm from "./component/counter";





// // import ApiInter from "./component/advice";
// // import InputChange from "./component/counter";
// // import MyComponent from "./component/counter";
// // import ShowAlert from "./component/counter";

// // import ApiGet from "./component/home";
// // import ApiConfig from "./component/webservice/APIConfig";




















// // import { Student } from "./component/Employee";
// // function App(){
    
// //     return (
// //         <>
// //         <Student name="anitha" age={20} isMarried={true} />
// //         <Student name="Ebra" age={25} isMarried={false} />
// //         <Student name="JezJer" age={10} isMarried={true} />
// //         </>
// //     );
// // }
// // export default App;



















// // import {FunctionSample} from "./component/Employee";
// // function App()
// // {
// //     const handleClick=()=>{
// //         alert('button clicked');
// //     };
// //     return(
// //         <>
// //         <div>
// //             <h2>parent component</h2>
// //             <FunctionSample handleClick={handleClick} />
// //             </div>
// //             </>
// //     );
// // }
// // export default App;


























































































































