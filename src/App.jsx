import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import About from "./component/About";

import {
   BrowserRouter as Router, Route, Routes 
  } from 'react-router-dom';



function App() {

  const[mode,setMode]=useState("light");
  // const [backgroundColor, setBackgroundColor] = useState("white"); 
const[alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
setAlert({
msg:message,
type:type
})
setTimeout(()=>{
  setAlert(null);
},1500);
}
 const toggleMode=()=>{
if (mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor="#0b234e";
  document.body.style.color="white";
  let txtBg=document.querySelector('textarea');
 txtBg.style.backgroundColor="#0b234e"; 
//  let txtBgco=document.querySelector('aboutUs');
//  txtBgco.style.backgroundColor="#0b234e"; 
//  txtBgco.style.color="white"; 
showAlert("Dark mode has been enabled","success");
// document.title="TextUtils-Dark mode";
// setInterval(()=>{
//   document.title=" TextUtils is Amazing";
//   },2000);
//   setInterval(()=>{
//     document.title=" Install Now";
//     },1500);

} else{
  setMode('light');
  
 document.body.style.backgroundColor="white";
 document.body.style.color="black";
 let txtBgc=document.querySelector('textarea');
 txtBgc.style.backgroundColor="white"; 
//  let txtBgco=document.querySelector('contain');
//  txtBgco.style.backgroundColor="white"; 

showAlert("light mode has been enabled","success");
// document.title="TextUtils-Light mode";

}

};
// const changeOrange=()=>{
//   setBackgroundColor="orange";
//   document.body.style.backgroundColor="orange";
  
//   };

  return (
    <>
    <Router>
      
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  aboutText="About Us"  />
      <Alert alert={alert}/>
      
      <div className="container"> 
      
      <Routes>
        <Route path="/" element={< TextForm mode={mode} showAlert={showAlert} heading="Enter the text to analyze" />} />
        <Route path="/about" element={<About  mode={mode}/>} />
      </Routes>
   



          {/* <TextForm  showAlert={showAlert}heading="Enter the text to analyze" /> */}
           
         

        {/* <TextForm  showAlert={showAlert}heading="Enter the text to analyze" />
        <About/> */}
      </div>
      </Router>
    </>
  );
}

export default App;
