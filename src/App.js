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
        const message = `https://wa.me/${entry['Whatsapp No.'].trim()}?text=*BOB%20Wonderkid%20and%20Wonderparent%20Online/Offline%20Competition%20Prize%20Distribution%20Ceremony%202023*%0A%0ADear%20Parents,%0A%0A%0A%0A%0A${entry['Students Name'].trim().length>0&&('Name:%20'+entry['Students Name'])}${entry['Roll No.'].trim().length>0&&('%0aRoll%20No:%20'+entry['Roll No.'])}${entry['Present Class'].trim().length>0 && ('%0aClass:%20'+entry['Present Class'])}%0ADate:%20*Monday%202nd%20October*${entry['Time'].trim().length>0&&('%0aTime:%20'+entry['Time'])}%0A%0AVenue%20:%20*PRAYAG%20SANGEET%20SAMITI*%0ACompany%20Bagh%20PRAYAGRAJ%0A%0AWonderparents%20ceremony%20timings%20are%20the%20same%20if%20they%20have%20participated%20in%20the%20competition.%0A%0A*Coming%20on%20stage%20itself%20is%20a%20big%20motivation%20for%20any%20child,%20so%20please%20come%20and%20grace%20the%20occassion.*%0A%0ANOTE%20:%20All%20kids%20will%20come%20in%20School%20Uniform%0A%0ARegards%0APramesh%20Srivastava%0ACity%20Coordinator%0ABrainobrain%C2%A0Prayagraj`
        window.open(message)
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
