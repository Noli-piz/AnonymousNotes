import { useState } from "react";
import { AiOutlineLoading } from 'react-icons/ai'
import TextareaAutosize from 'react-textarea-autosize';

function write() {

  const [title, setTitle] = useState();
  const [note, setNote] = useState();
  const [loading, setLoading] = useState(false);
  const [submitResult, setSubmitResult] = useState();

  const onResetSubmitResult = ()=>{
    let DELAY_TIME = 5000;
    setTimeout(()=>{
      setSubmitResult();
    }, DELAY_TIME);
  }

  const onSubmit = async ()=>{

    if(!title) return alert("Title is required!");
    if(!note) return alert("Note is required!");

    setLoading(true);
    try{
      const response = await fetch('/api/api-notes', {
        method : 'POST',
        headers : {
          'Conten-Type' : 'application/json'
        },
        body : JSON.stringify({'title' : title, 'note' : note, 'date' : Date.now()})
      });
      const data = await response.json();

      if(!data.success) return alert("Something went wrong!");

      let DELAY_TIME = 1000;
      setTimeout(()=>{
        setLoading(false);
        setSubmitResult(data.success);
        //reset
        setTitle('');
        setNote('');
        onResetSubmitResult();
      }, DELAY_TIME);
    }catch(e){
      setLoading(false);
      alert(e.message);
    }
  }

  return (
    <div className="write-container">
      <div>
        <label> Title: </label>
        <input value={title} onChange={(e)=> setTitle(e.target.value) } placeholder="e.g. I Love You 3000, Under the Sakura tree, etc. " />
        
        <label> Your note: </label>
        <textarea value={note} onChange={(e)=> setNote(e.target.value) } placeholder="Write here..." />
        <button type="button" onClick={()=> onSubmit()}> 
          { loading ? <AiOutlineLoading className="loading-icon"/> : 'SUBMIT'}
        </button>
        <div> { submitResult } </div>
        
      </div>
    </div>
  )
}

export default write