import React, {useState} from "react";

function Toggle() {
  const [isOn,setIsOn]=useState(false)
function handleSet(){
  setIsOn(!isOn)
}
  return <button onClick={handleSet}>{isOn?"On":"Off"}</button>;
}

export default Toggle;
