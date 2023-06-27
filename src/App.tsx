import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import team_members from './team-members.json';
import './App.css'

function App() {
  const { alumnis, members, captains } = team_members;
  return (
    <>
      <div>
        <h1>alummnis</h1>
        {alumnis.map((alumni) => (<div key={alumni.id}>
          <h1>{alumni.name}</h1>
          <b>{alumni.role}</b>
          <img src={alumni.pfp} />
          <a href={alumni.linkedin}>linkedin</a>
        </div>))}
        <h1>members</h1>
        {members.map((member) => (<div key={member.id}>
          <h1>{member.name}</h1>
          <b>{member.role}</b>
          <img src={member.pfp} />
          <a href={member.linkedin}>linkedin</a>
        </div>))}
        <h1>captains</h1>
        {captains.map((captain) => (<div key={captain.id}>
          <h1>{captain.name}</h1>
          <b>{captain.role}</b>
          <img src={captain.pfp} />
          <a href={captain.linkedin}>linkedin</a>
        </div>))}
      </div>
    </>
  )
}

export default App
