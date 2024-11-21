
import './App.css';
import {Uppercase} from './Conversion/Uppercase'
import { Alert } from './Conversion/Alert';
import  { useState } from 'react';


function App() {

const [alert , setAlert]= useState(null);
  
const func=(message , type)=>{
  setAlert({
    msg :message,
    type:type,  
  })
}

  setTimeout(()=>{
    setAlert(null);
  }, 5000)
  
    



  return (
   <div>
    <Alert mystr={alert} />
    <Uppercase show={func} />
    </div>
  );
}

export default App;
