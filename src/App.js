import "../src/styles.css"
import Dropdown from "./Dropdown";
import { useState } from "react";



export default function App() {
  const [selected,setSelected]= useState("select");
  return (
    <div className="App">
      {/*  custom dropdown menu */}

      <div className="slidebar" >
      <div className="head-title">Should you use a dropdown?</div>
      <Dropdown selected={selected}  setSelected={setSelected}/>
      </div>
    </div>
  )
}
