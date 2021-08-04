import React, { useState } from "react";

function CreateArea(props) {



const [note , setNote] = useState({
  title: "",
  content: ""
})

function handelChange (event){
  //cuz its an obj thats why {}
  const {name,value} = event.target;

  setNote(pre => {
    return{
      ...pre,
      [name]:value
    }
  })
 


  }

  function submitNote(event){
    

    props.onAdd(note)



    
    setNote({
      title: "",
      content: ""
    })
    
    event.preventDefault();

  }
  return (
    <div>
      <form>
        <input name="title" onChange = {handelChange} value = {note.title}  placeholder="Title" />
        <textarea name="content" onChange = {handelChange} value= {note.content}  placeholder="Take a note..." rows="3"   />
        <button onClick = {submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
