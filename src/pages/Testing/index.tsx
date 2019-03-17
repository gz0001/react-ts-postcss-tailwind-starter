import React, { useContext } from 'react'
import cx from 'classnames'
import { Box, Text, createState } from 'tt-react-ui-2'

// Components:
import { Post } from 'components/Post'
import { Button } from 'atoms/Button';

// Context:
import { AppContext } from 'context/appContext'

// ================================================================================================

export interface TestingProps {}

export const Testing: React.FunctionComponent<TestingProps> = ({}) => {
  const {
    state: { counter },
    dispatch
  } = useContext(AppContext)

  const [state, setState] = createState({ text: '', person: { name: 'truong', age: 26 } })

  const { text, person } = state

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ text: event.target.value })
  }

  const handleSetPerson = () => {
    setState({ person: { name: person.name, age: person.age } })
  }

  const { current: handler } = React.useRef({ handleInput, handleSetPerson })

  return (
    <Box w="screen" min-h="screen" display="block">
      <Button p="2" onClick={React.useCallback(() => dispatch({ type: 'ADD' }), [])}>
        Add
      </Button>
      <Text ml="2">{counter}</Text>

      <Post />
      <Box mt="4" display="block">
        <Input value={text} onChange={React.useCallback(handleInput, [text])} />
        <Text paragraph>{text}</Text>

        <Input value={text} onChange={handler.handleInput} />
        <Text paragraph>{text}</Text>
        <Person person={person} counter={counter} />
        <Button onClick={handler.handleSetPerson}>Set person</Button>
      </Box>
    </Box>
  )
}

// ================================================================================================

type Input = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

const Input: React.FunctionComponent<Input> = React.memo(({ onChange, value }) => {
  console.log('Input rendered')

  return <input className="border-2 border-black" onChange={onChange} value={value} />
})

// ================================================================================================

type Person = {
  name: string
  age: number
}

interface PersonProps {
  person: Person
  counter: number
}

const Person: React.FunctionComponent<PersonProps> = React.memo(({ person, counter }) => {
  const { name, age } = person
  console.log('Person rendered.')

  return (
    <Box>
      <Text
        paragraph
        center
      >{`Hello I am ${name} and ${age} years old. And i have ${counter} counters!`}</Text>
    </Box>
  )
})
