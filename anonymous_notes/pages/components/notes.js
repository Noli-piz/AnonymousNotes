import { useEffect, useState } from "react";
import Link from "next/link";

function notes({id}) {

  const [data, setData] = useState([]);

  useEffect(()=>{
    onRetrieved()
  },[0])

  const onRetrieved = async ()=>{
    const response = await fetch('/api/api-notes', {
      method : 'GET',
      headers : {
        'Conten-Type' : 'application/json'
      }
    });

    const object = await response.json();
    setData(object.data);
  }

  const sliceTitle =(title)=>{
    var str = title + '';
    if(str.length > 8){
      return str.slice(0,8) + '...';
    }
    return title;
  }

  return (
    <>
    <div className="container" style={{display:"flex", justifyContent:"center", marginTop:"150px"}}> Read More </div>
    <div className="notes-link-container" style={{display:"flex", flexWrap:"wrap", justifyContent:"center" , marginTop:"20px"}}>
      {
        data.map((data, index)=>{
          return(
              <Link href={{ pathname: "/page/read", query : data }} className="notes-link" style={ id !== data._id ? {} : {opacity:'1'}} key={index}>
                { sliceTitle(data.title)}
              </Link>
          )
        })
      }
    </div>
    </>
  )
}

export default notes