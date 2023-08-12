import {useState} from 'react';
import './App.css';
import entries from './entries.json';
function App() {

  const [messagesSent,setMessagesSent] = useState(0);
  const [startRollNumber,setStartRollNumber] = useState(entries[0]['Roll No.']);

  const sendMessages = ()=> {
    entries.slice(messagesSent,messagesSent+10).map((entry,index)=> {
      entry['Whatsapp No.']=String(entry['Whatsapp No.']);
      entry['Roll No.']=String(entry['Roll No.']);
      entry['Present Class']=String(entry['Present Class']);
      if(entry['Whatsapp No.'].trim().length>0){
        window.open(`https://wa.me/+91${entry['Whatsapp No.']}?text=*BOB%20WONDERKID%202023*%0aNational%20Level%20Offline%20Competition%0a%0aDear%20Parent,%0a%0aBOB%20Wonderkid%20Competition%20details%0a%0a${entry['Roll No.'].trim().length>0&&('Roll%20No:%20'+entry['Roll No.'])}${entry['Students Name'].trim().length>0&&('%0aName:%20'+entry['Students Name'])}${entry['School with Branch'].trim().length>0 && ('%0aSchool:%20'+entry['School with Branch'])}${entry['Present Class'].trim().length>0 && ('%0aClass:%20'+entry['Present Class'])}%0a(Please%20comment%20if%20any%20detail%20is%20wrong/%20Spelling%20error)%0a%0a${entry['Competition Venue'].trim().length>0 && ("Venue:%20"+entry['Competition Venue'])}${entry['Date'].trim().length>0&& ('%0aDate%20and%20Time:%20'+entry['Date']+'%20at%20'+entry['Time'])}%0a%0a*(Reporting%20time%20is%2030mins%20before%20exam%20time)*%0a%0a*Things%20to%20Carry*%0a1.%20Admit%20card%20(Upper%20portion%20of%20the%20form)/%20School%20ID%20Card/%20School%20Diary%0a(Any%201%20of%20mentioned%20above)%0a2.%20Pencil%20Box/%20Pen%20and%20Water%20Bottle%0a3.%20Dress%20Code:%20School%20Uniform%0a%0aRegards%0aTeam%20BOB%20Wonderkid%0aBrainobrain%20Prayagraj`)
      }
    })
    setMessagesSent((prevMessagesSent)=>{return prevMessagesSent+10});
    if(messagesSent+10<entries.length && entries[messagesSent+10]['Roll No.'].trim().length>0){
      setStartRollNumber(entries[messagesSent+10]['Roll No.']);
    }
  }

  const setRollNumberToStart = (e)=> {
    const index=entries.findIndex(entry=>(entry['Roll No.']==e.target.value.trim()));
    if(index && index >=0) {
      setMessagesSent(index);  
      setStartRollNumber(e.target.value.trim());
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <p style={{fontSize: '20px',marginBottom: '5px'}}>Start at:</p> 
        <input style={{padding: '10px'}} onChange={setRollNumberToStart} type="string" placeholder="Start roll number" />
        <p style={{marginBottom: '40px',fontSize:'20px'}}>Starting with {startRollNumber}</p>
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
