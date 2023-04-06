import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arr,pushArr]=React.useState([])
  function addNote(note) {
    pushArr((prevValue)=>{
      return [...prevValue,note]   
    })
  }
  function del(id) {
    pushArr((prevValue)=>{
        return prevValue.filter((val,index)=>{
          return index!==id
        })
    })
    
  }
  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
      {arr.map((value,index)=>{
        return <Note  title={value.title} content={value.text} onDelete={del} index={index}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
