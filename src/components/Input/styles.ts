import styled, { css } from 'styled-components'

interface ContainerProps {
  isFocused: boolean
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #777;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #993399;
      border-color: #993399;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #333333;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`
