import React from "react";
import "./style.css";
const user=["nithish","React","angular","java"]
export default function App() {
  return (
    <div>
      {user?.length && user?.map((users,index)=>{
        return(
          <div>
          <li key={index}>{index}</li> <br/>
          <li>{users}</li>
          </div>
      )
      })}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {user.length}
    </div>
  );
}
