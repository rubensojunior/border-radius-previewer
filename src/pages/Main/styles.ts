import styled, { css } from 'styled-components'

interface BorderProps {
  borderTopLeft: number
  borderTopRight: number
  borderBottomLeft: number
  borderBottomRight: number
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

  ${(props) =>
    props.borderTopRight &&
    css`
      border-top-right-radius: ${props.borderTopRight}px;
    `}

  ${(props) =>
    props.borderBottomLeft &&
    css`
      border-bottom-left-radius: ${props.borderBottomLeft}px;
    `}

  ${(props) =>
    props.borderBottomRight &&
    css`
      border-bottom-right-radius: ${props.borderBottomRight}px;
    `}
`

export const Button = styled.button`
  margin-top: 20px;
`
