import React from 'react'

import { Button } from './Button'
import { Input } from './Input'

const Welcome: React.FC = () => {
  const [roomCode, setRoomCode] = React.useState<string>()
  const [name, setName] = React.useState<string>()
  return (
    <>
      <Input
        onChange={(e) => setRoomCode(e.target.value)}
        placeholder="Enter room code"
        value={roomCode}
      />
      <Input
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        value={name}
      />
      <Button
        disabled={!roomCode || !name}
        onClick={() => {
          if (name && roomCode) {
            document.location.search = `?RoomCode=${roomCode}&Name=${name}`
          }
        }}
      >
        Join
      </Button>
    </>
  )
}

export default Welcome
