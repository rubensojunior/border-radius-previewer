import React, { useState, useCallback } from 'react'

import Input from '../../components/Input'

import { Container, Box } from './styles'

const App: React.FC = () => {
  const [borderTopLeft, setBorderTopLeft] = useState(0)

  const handleInputTopLeftChange = useCallback((event) => {
    const borderTopLeftValue = event.target.value

    setBorderTopLeft(borderTopLeftValue)
  }, [])

  return (
    <Container>
      <Box borderTopLeft={borderTopLeft} />

      <Input
        onChange={(event) => handleInputTopLeftChange(event)}
        value={borderTopLeft}
        type="number"
      />
      <Input />
      <Input />
      <Input />
    </Container>
  )
}

export default App
