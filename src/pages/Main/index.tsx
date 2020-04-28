import React, { useState, useCallback } from 'react'

import copy from 'clipboard-copy'
import Input from '../../components/Input'

import { Container, Title, BoxContainer, Box, Button, Copied } from './styles'

const App: React.FC = () => {
  const [copied, setCopied] = useState(false)
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
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 3000)

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
      <Title>Border Radius Previewer</Title>

      <BoxContainer>
        <Box
          borderTopLeft={borderTopLeft}
          borderTopRight={borderTopRight}
          borderBottomLeft={borderBottomLeft}
          borderBottomRight={borderBottomRight}
        />
      </BoxContainer>

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

      {copied && <Copied>Copied to clipboard!</Copied>}
    </Container>
  )
}

export default App
