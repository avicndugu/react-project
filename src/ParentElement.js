import {useState } from 'react';

// function ParentElement() {
//   const [Name, setName] = useState("");
//   return(
//     <div> {Name} :
//       <Child setName={setName} ></Child>
//     </div>
//   )
// }

// function Child(props) {
//   function handleChange(ele) {
//     console.log(ele)
//     props.setName(ele.target.value);
//   }
//   return (
//     <div>
//       <input onChange={handleChange} value={props.Name}></input>
//     </div>
//   )
// }

function ParentElement(){
  const [title, setTitle] = useState("Hello World");
  return(
    <>
      <h1>Parent title: {title}</h1>
      <Child title={title} setTitle ={setTitle}/>
      <button onClick={()=> setTitle("Hello from Parent")}>Change Title Parent</button>
    </>
  )
}

function Child(props) {
  return (
    <div>
      <h1>Child Title: { props.title }</h1>
      <button onClick={()=> props.setTitle("Hello from Child")}>Change Title Child</button>
    </div>
  )
}

export default ParentElement;