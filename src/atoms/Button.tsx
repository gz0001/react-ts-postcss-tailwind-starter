import React, {memo} from 'react'
import { Button as Btn, ButtonProps } from 'tt-react-ui-2'

// ================================================================================================

export const Button: React.FunctionComponent<ButtonProps> = memo(props => {
  console.log('atoms button render');
  
  return <Btn {...props}/>
})

Button.defaultProps = {
  bg: "third",
  h: "12",
  ripple: true,
  rounded: 'sm'
}

