"use client";

import { useState } from "react";

export default function strPrac() {
  // const val = "hello";
  // let val = "hello";

  const [val, setVal] = useState("Hello World");
  const [val2, setVal2] = useState("Hello World 2");

  const onChangeHandler = (e: any) => {
    console.log("e is", e.target.value);
    // val = e.target.value;
    setVal(e.target.value);

  };

  const onChangeHandler2 = (e: any) => {
    console.log("e is", e.target.value);
    // val = e.target.value;
    setVal2(e.target.value);
  };

  return (
  
  <>  
  
<input type="text" value={val} onChange={onChangeHandler} />
<br/>
<input type="text" value={val2} onChange={onChangeHandler2}/>
<br/>
length of stirng 1: {val.length}
<br/>
length of stirng 2: {val2.length}
  
  </> 
  ); 
}
