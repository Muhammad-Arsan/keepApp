import React , {useState} from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
function App() {
  const [addItem ,setaddItem] = useState([]);
const addNote=(note)=>{
 
  setaddItem((prevData)=>{
    return [...prevData , note]
    
  })
}
const onDelete = (id) =>{
   
  setaddItem((olddate)=>
olddate.filter((curdata , indx)=>{
  return indx !== id;

})

  )}
  return (
   <>
   <Header />
   <CreateNote passNote={addNote} />

   {addItem.map((val,index)=>{
   return(
    <Note
     key = {index}
     id = {index}
     title = {val.title}
     content = {val.content}
     deleteItem = {onDelete}
     />
   );     
     
   })}
   
    
    
    
   <Footer />
    
   </>
  );
}

export default App;
