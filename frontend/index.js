// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// // import Rosy from './component/praveena';





// ReactDOM.render(<Rosy name="Anitha" Emp_id={1001} />,document.getElementById("root"));









































// // class Learnreactpropsparent extends React.Component
// // {
// //     render(){
// //  return<h1>LearnReact{this.props.var.concept} in {this.props.var.language}</h1>
 
// //     }
// // }

// // class Learnreactpropschild extends React.Component
// // {
// //     render() {
// //        const v = {language:"english",concept:"props"} 
// //        return<Learnreactpropsparent var={v}/>
// //     }
// // }

// // ReactDOM.render(<Learnreactpropschild topic="React Js" language="tamil"/>,document.getElementById("root"));







import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import store from "./component/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
// const MyContext = createContext()
root.render(
  <Provider store={store}>
  <React.StrictMode>
     <App />
   </React.StrictMode>
  
  {/* // <App /> */}
</Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
