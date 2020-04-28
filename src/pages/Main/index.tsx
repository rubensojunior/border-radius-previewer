import React, { useState, useCallback } from 'react'

import copy from 'clipboard-copy'
import Input from '../../components/Input'

import { Container, Box, Button } from './styles'

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

  const handleCopyButtonClick = useCallback(async () => {
    const resultCss = `
    ${borderTopLeft > 0 ? `border-top-left-radius: ${borderTopLeft}px;` : ''}
    ${borderTopRight > 0 ? `border-top-right-radius: ${borderTopRight}px;` : ''}
    ${
      borderBottomLeft > 0
        ? `border-bottom-left-radius: ${borderBottomLeft}px;`
        : ''
    }
    ${
      borderBottomRight > 0
        ? `border-bottom-right-radius: ${borderBottomRight}px;`
        : ''
    }
    `

    await copy(resultCss)
  }, [borderTopLeft, borderTopRight, borderBottomLeft, borderBottomRight])

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

      <Button type="button" onClick={handleCopyButtonClick}>
        Copy to clipboard
      </Button>
    </Container>
  )
}

export default App
