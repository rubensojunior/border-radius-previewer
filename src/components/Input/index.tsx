import React, { InputHTMLAttributes, useState, useCallback } from 'react'

import { Container } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({ ...rest }) => {
  // const inputRef = useRef<HTMLInputElement>(null)

  const [isFocused, setIsFocused] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return (
    <Container isFocused={isFocused}>
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        // ref={inputRef}
        {...rest}
      />
    </Container>
  )
}

export default Input
