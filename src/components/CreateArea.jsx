import React from "react";
function CreateArea(props) {
  const [titleInput,settitleInput]=React.useState({
    title:"",
    text:""
  });
  
  function handleChange(event) {
    const {name,value}=event.target;
    settitleInput((prevValue)=>{
      if (name==="title") {
        return{
        title:value,
        text:prevValue.text
        }
      } else {
        return{
          title:prevValue.title,
          text:value
          }
      }
    })
  }

  function clicked(event) {
    event.preventDefault();
    props.onAdd(titleInput);
    settitleInput({
      title:"",
      text:""
    })
    
  }
    
  
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={titleInput.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={titleInput.text}/>
        <button onClick={clicked}>Add</button>
      </form>
    </div>
  );
  }

export default CreateArea;
                