

import axios from "axios";
import {useState,useEffect} from "react";

export default function App(){
  return(
    <>
    <MyComponent/>
    </>
  );
}

function MyComponent(){

  const[message,setMessage] = useState("");
  const[list,setList] = useState([]);

  const handleMessage = (e) =>{
    setMessage(e.target.value);
  };

  const addMessage =async () =>{
    const url ="http://localhost:4000/add-message";
    const data ={
      message : message
    };

    await axios.post(url,data);
    const newList = [data, ...list];
    setList(newList);

    setMessage("");
  };

  //  const getMessage =async () =>{
  //    const url ="http://localhost:4000/messages";
  //    const result = await axios.get(url);
  //    const list = result.data;
  //     const newList = [...list];
  //     setList(newList);
  //  };

  //  useEffect(() => getMessage(),[]);

  return(
    <div>
      <div className ="bg-success">
         <h3 className ="text-light p-3">MyChatApp</h3>
         <h5 className="ms-5  p-2">by [Rushikesh jadhav-210940520076]</h5>
      </div>
      
      <div>
        <input className="alert alert-secondary w-50" type ="text" placeholder="Lets chat here..." value={message} onChange={handleMessage} />
        <input className="alert alert-secondary bg-success text-light ms-5" type ="button" value="SEND" onClick={addMessage} />
        {/* <input type ="button" value="getmessage" onClick={getMessage} /> */}
      </div>
      
      <h2 className="bg-success d-flex justify-content-center p-3">Messages</h2>
      {list.map((item,index) =>(
        <div key={index} className="alert alert-secondary fs-4">{item.message}</div>
      ))};

    </div>
  );
}