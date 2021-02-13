import TestForm from "./components/TestForm"
import {useEffect, useState} from "react"

function App() {
  const [Page, PageSetter]=useState(0)
  
  return (
    <div className = "container">
      {/* <h1>Hello</h1>
      <TestForm/> */}
      <Login/>
    </div>
  );
}

export default App;
