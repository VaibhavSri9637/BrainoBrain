import {useState} from 'react';
import './App.css';
import entries from './entries.json';
function App() {

  const [messagesSent,setMessagesSent] = useState(0);  

  const sendMessages = ()=> {
    entries.slice(messagesSent,messagesSent+10).map((entry,index)=> {
      window.open(`https://wa.me/${entry['Whatsapp No.']}?text=*BOB%20WONDERKID%202023*%0aNational%20Level%20Offline%20Competition%0a%0aDear%20Parent,%0a%0aBOB%20Wonderkid%20Competition%20details%0a%0aRoll%20No:%20${entry['Roll No.']}%0aName:%20${entry['Students Name']}%0aSchool:%20${entry['School with Branch']}%0aClass:%20${entry['Present Class']}%0a(Please%20comment%20if%20any%20detail%20is%20wrong/%20Spelling%20error)%0a%0aVenue:%20Allahabad%20Public%20School,%20Chaufatka%20Prayagraj%0aDate%20and%20Time:%20Sunday,%2013th%20August%20at%20Sharp%2010:00am%0a%0a*(Reporting%20time%20is%2030mins%20before%20exam%20time)*%0a%0a*Things%20to%20Carry*%0a1.%20Admit%20card%20(Upper%20portion%20of%20the%20form)/%20School%20ID%20Card/%20School%20Diary%0a(Any%201%20of%20mentioned%20above)%0a2.%20Pencil%20Box/%20Pen%20and%20Water%20Bottle%0a3.%20Dress%20Code:%20School%20Uniform%0a%0aRegards%0aTeam%20BOB%20Wonderkid%0aBrainobrain%20Prayagraj`)
    })
    setMessagesSent((prevMessagesSent)=>{return prevMessagesSent+10});
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={sendMessages} style={{padding: '20px', borderRadius: '8px', cursor: 'pointer'}}>Send next 10 messages</button>
        <h4 style={{marginTop:"50px"}}>Total messages sent: {messagesSent}</h4>
        {messagesSent > 0 && 
        <table style={{marginTop:"20px"}}>
            <thead style={{fontSize:"12px"}}>
              <tr>
                <th style={{width: '200px'}}>
                  Roll number
                </th>
                <th style={{width: '200px'}}>
                  Name
                </th>
              </tr>
            </thead>
            <tbody style={{fontSize:'12px',width: '200px'}}>
              {entries.slice(0,messagesSent).map((entry,index)=>(
                <tr key={index}>
                  <td>
                    {entry['Roll No.']}
                  </td>
                  <td>
                    {entry['Students Name']}
                  </td>
              </tr>
              ))}
            </tbody>
        </table>}
      </header>
    </div>
  );
}

export default App;
