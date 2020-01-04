import React from 'react'

export default function Mailbox(props) {
  const unreadMessages = props.unreadMessages
  return (
    <div>
      <h1>Xin chào</h1>
      {
        unreadMessages.length === 0 || <h2>Bạn có {unreadMessages.length} tin nhắn</h2>
      }
    </div>
  )
}