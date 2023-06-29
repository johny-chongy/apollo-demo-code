
import React, { useState, useEffect }  from 'react';

function UserDetail({messages}) {
  const [showMsg, setShowMsg] = useState(false);
  const btnLabel = showMsg ? 'Hide Messages' : 'Show Messages';

  function handleClick(evt) {
    setShowMsg(!showMsg);
  }
  return (
    <div className="UserDetail">
      <button onClick={handleClick}>{btnLabel}</button>
      {/* {showMsg &&
      <AddMessageForm username={username} onSubmit={addMessage}/>
      } */}
      {messages && showMsg && messages.length === 0 &&
        <b>No messages available</b>
      }
      {messages && showMsg &&
        <ul>
          {messages.map(m => <p key={m.id}>{m.body}</p>)}
        </ul>
      }
    </div>
  )
}

export default UserDetail
