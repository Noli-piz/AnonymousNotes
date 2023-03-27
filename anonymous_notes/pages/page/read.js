import { useRouter } from 'next/router'
import NotesLink from "../components/notes";
import TextareaAutosize from 'react-textarea-autosize';

function read() {
    const router = useRouter();
    const data = router.query;
  return (
    <div className="read-container">
      <div>
        <div className="title"> " {data.title} "</div>
        {/* <div className="note"> " {data.note} "</div> */}
        <div style={{display:"flex", justifyContent:"center"}}> 
          <TextareaAutosize className="note" value={data.note} readOnly />
        </div>
        <NotesLink id={data._id}/>
      </div>
    </div>
  )
}

export default read