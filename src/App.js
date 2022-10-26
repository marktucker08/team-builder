import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import Form from './Form';

const teamMemberList = [{name: 'Mark', email: 'mark@me.com', role: "Software Engineer"},]

function App() {
  const [members, setMembers] = useState(teamMemberList);
  return (
    <div className="App">
      <h1>New Team Member Form</h1>

      <Form members={members} setMembers={setMembers} />
      <h2>Team Members:</h2>
      {members.map((member, idx) => {
        return (
        <div key={idx}>
          <li>Name: {member.name}, Email: {member.email}, Role: {member.role}</li>
        </div>
      )})}
    </div>
  );
}

export default App;
