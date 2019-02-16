// Components:
import * as React from 'react'

// Custom components:
import { Selectbox, Selection, Option } from 'tt-react-ui-2'

// Styles:
import './style.css'

// ================================================================================================

// Props:
export interface Props {
  background: string
}

// State:
type State = {
  selected: string
}



// ================================================================================================

export class Stateful extends React.Component<Props, State> {
  static readonly defaultProps: Props = {
    background: 'cyan'
  }

  state: State = {
    selected: ''
  }

  handleSelect = (key: keyof State) => (selection: Selection) => {
    this.setState({ [key]: selection as string })
  }

  render() {
    const { background } = this.props
    const { selected } = this.state

    const options: Option[] = [
      { label: 'React', value: 'react' },
      { label: 'Angular', value: 'angular' },
      { label: 'Vue', value: 'vue' }
    ]

    return (
      <div className="Stateful" style={{ padding: '1rem', backgroundColor: background, width: "20rem" }}>
        <p>Selected: {selected}</p>
        <Selectbox
          options={options}
          label="Pls select!"
          onSelect={this.handleSelect('selected')}
          selection={selected}
          material
        />
      </div>
    )
  }
}
