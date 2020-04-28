import React, { useState, useCallback } from 'react'

import Input from '../../components/Input'

import { Container, Box } from './styles'

const App: React.FC = () => {
  const [borderTopLeft, setBorderTopLeft] = useState(0)
  const [borderTopRight, setBorderTopRight] = useState(0)
  const [borderBottomLeft, setBorderBottomLeft] = useState(0)
  const [borderBottomRight, setBorderBottomRight] = useState(0)

  const handleInputTopLeftChange = useCallback((event) => {
    const borderTopLeftValue = event.target.value

    setBorderTopLeft(borderTopLeftValue)
  }, [])

  const handleInputTopRightChange = useCallback((event) => {
    const borderTopRightValue = event.target.value

    setBorderTopRight(borderTopRightValue)
  }, [])

  const handleInputBottomLeftChange = useCallback((event) => {
    const borderBottomLeftValue = event.target.value

    setBorderBottomLeft(borderBottomLeftValue)
  }, [])

  const handleInputBottomRightChange = useCallback((event) => {
    const borderBottomRightValue = event.target.value

    setBorderBottomRight(borderBottomRightValue)
  }, [])

  return (
    <Container>
      <Box
        borderTopLeft={borderTopLeft}
        borderTopRight={borderTopRight}
        borderBottomLeft={borderBottomLeft}
        borderBottomRight={borderBottomRight}
      />

      <Input
        onChange={(event) => handleInputTopLeftChange(event)}
        value={borderTopLeft}
        type="number"
      />
      <Input
        onChange={(event) => handleInputTopRightChange(event)}
        value={borderTopRight}
        type="number"
      />
      <Input
        onChange={(event) => handleInputBottomLeftChange(event)}
        value={borderBottomLeft}
        type="number"
      />
      <Input
        onChange={(event) => handleInputBottomRightChange(event)}
        value={borderBottomRight}
        type="number"
      />
    </Container>
  )
}

export default App
