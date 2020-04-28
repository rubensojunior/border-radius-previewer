import styled, { css } from 'styled-components'

interface BorderProps {
  borderTopLeft: number
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Box = styled.div<BorderProps>`
  width: 500px;
  height: 500px;
  background: #f74834;
  margin-bottom: 50px;

  ${(props) =>
    props.borderTopLeft &&
    css`
      border-top-left-radius: ${props.borderTopLeft}px;
    `}
`
