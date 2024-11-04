import {useState} from 'react';
import './App.css';
import entries from './entries.json';
function App() {

  const [messagesSent,setMessagesSent] = useState(0);
  const [startRollNumber,setStartRollNumber] = useState(entries[0]['HT']);

  const sendMessages = ()=> {
    entries.slice(messagesSent,messagesSent+10).map((entry,index)=> {
      entry['MOB']=String(entry['MOB']);
      entry['HT']=String(entry['HT']);
      entry['CLASS']=String(entry['CLASS']);
      entry['NAME']=String(entry['NAME']);
      if(entry['MOB'].trim().length>0){
        console.log("entry", entry ); 
        const message = `https://wa.me/${entry['MOB'].trim()}?text=*BOB%20Wonderkid%202024*%0A*Prize%20Distribution%20Ceremony*%0A%0ADear%20${entry['NAME'].trim()},%0AClass ${entry['CLASS'].trim()},%0AHT%20No.%20${entry['HT'].trim()},%0A%0ACongratulations!!%0AThe%20wait%20is%20over%20and%20it%20is%20time%20to%20declare%20the%20results%20of%20the%20BOB%20Wonderkid%20and%20Wonderparent%20Competition.%0A%0AWe%20take%20this%20opportunity%20to%20invite%20you%20for%20the%20prize%20distribution%20ceremony%20for%20the%20same.%0A%0A*Venue:%20KP%20Community%20Centre*%0ANear%20Medical%20Chauraha,%20Prayagraj%0A%0A*Day%20and%20Date:%20Sunday,%2010th%20November*%0A%0A*Time:%201%20PM%20to%203:30%20PM*%0A%0A*Notes:*%0A1.%20Your%20name%20will%20be%20called%20on%20stage%20to%20receive%20the%20Certificate%20/%20Award%0A2.%20Children%20need%20to%20*wear%20School%20Uniform*%0A%0ARegards,%0ATeam%20Brainobrain%20Prayagraj`
        window.open(message)
      }
    })
    setMessagesSent((prevMessagesSent)=>{return prevMessagesSent+10});
    if(messagesSent+10<entries.length && entries[messagesSent+10]['HT'].trim().length>0){
      setStartRollNumber(entries[messagesSent+10]['HT']);
    }
  }

  const setRollNumberToStart = (e)=> {
    const index=entries.findIndex(entry=>(entry['HT']==e.target.value.trim()));
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
                    {entry['HT']}
                  </td>
                  <td>
                    {entry['NAME']}
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
