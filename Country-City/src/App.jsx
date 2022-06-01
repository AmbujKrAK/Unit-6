import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CustomizedTables from  "./components/table"
import {Form} from "./components/form"
import Button from '@mui/material/Button';

function App() {
  const [But,setButton]=useState(false);
  return (
    <div className="App">
    { But?<Form/>:<CustomizedTables/>}
<Button variant="contained" color="success" style={{marginTop:"20px"}} onClick={()=>{
setButton(!But);
}}
>{But?"show Data":"Add Something More"}</Button>     
    </div>
  )
}

export default App
