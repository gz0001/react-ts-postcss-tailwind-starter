// Components:
import * as React from 'react'

// Styles:

// ================================================================================================

// Props:
export interface Props {
  /**
   * Message to display
   */
  message: string
  /**
   * Default color
   * @default red
   */
  color?: 'black' | 'red' | 'blue'
}

// ================================================================================================

export const Stateless = ({ message, color }: Props) => {
  const [red, setRed] = React.useState(true)
  return (
    <p style={{ color: red ? 'red' : 'blue' }} onClick={() => setRed(!red)}>
      {message}
    </p>
  )
}
