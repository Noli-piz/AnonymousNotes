import Link from "next/link";
import { useEffect, useState } from "react";

function home() {

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
    console.log(object.data);
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
    <div className="home-container">
      {
        data.map((data, index)=>{
          return(
            <div className="card" key={index}>
              <div className="card-title">
                <span className="quotation"> " </span>
                { sliceTitle(data.title)}
                <span className="quotation"> " </span>
              </div>
                <Link href={{ pathname: "/page/read", query : data }}>
                  <button className="btn-card"> 
                  READ
                  </button>
                </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default home