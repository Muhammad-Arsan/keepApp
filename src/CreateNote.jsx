import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const CreateNote = (props) => {

    const [note , setNote] = useState({
        title:"",
        content:""
    })
    const [expand , setExpand] = useState(false);
    const inputEvent = (event)=>{
    // const value = event.target.value;
    // const name =event.target.name;

    const {name, value } = event.target;
    setNote((preVal)=>{
        return{
            ...preVal,
            [name]:value,
        }
    
    })
    }
    const addEvent=()=>{
    props.passNote(note);
    setNote({
        title:"",
        content:"",
    })
    }

    const expandIt=()=>{

        setExpand(true);

    } 
     
    const reduceIt = () => {
        setExpand(false);
    }

    return (

        <>
        <div className = "main_note" onDoubleClick = {reduceIt}>
            <form>
                {expand ? (
                <input 
                type = "text"
                name = "title"
                placeholder= "Title"
                autoComplete="off"
                value={note.title}
                onChange = {inputEvent}
                />) :null }
                <textarea
                rows = ""
                column = ""
                name = "content"
                placeholder = "write a note..."
                value={note.content}
                onChange={inputEvent}
                onClick = {expandIt}
                /> 
              {expand ? ( 
             <Button onClick={addEvent} className = "mui-button">
               <AddIcon className = "btn_sign"/>
             </Button> )
             :null}      

             </form>   
        </div>    
        </>
    )
}
export default CreateNote;