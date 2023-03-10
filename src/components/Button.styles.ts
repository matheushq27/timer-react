import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonConatinerProps {
  variant: 'primary' | 'secondary' | 'danger' | 'success'
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonConatinerProps>`
  width: 100px;
  height: 40px;
  ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }}
`
