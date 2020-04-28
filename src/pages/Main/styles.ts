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

  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`

export const Title = styled.h1`
  margin-bottom: 40px;
`

export const BoxContainer = styled.div`
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
`

export const Box = styled.div<BorderProps>`
  width: 100%;
  padding-top: 100%;
  background: #993399;
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
  height: 40px;
  padding: 0 16px;
  border: 0;
  background: #993399;
  color: #fff;
  border-radius: 20px;
  font-size: 14px;
`

export const Copied = styled.span`
  font-size: 14px;
  color: #993399;
  margin-top: 10px;
`
