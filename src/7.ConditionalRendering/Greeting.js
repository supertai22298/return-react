import React from 'react'

function UserGreeting(props) {
  return <h1>Xin chào user</h1>
}
function GuestGreeting(props) {
  return <h1>Xin chào khách</h1>
}

export default function Greeting(props) {
  return props.isLoggedIn ? <UserGreeting/> : <GuestGreeting/>
}