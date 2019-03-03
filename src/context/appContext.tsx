import React, {
  createContext,
  useReducer,
  FunctionComponent,
  FunctionComponentElement,
  Dispatch,
  Reducer
} from 'react'
import cx from 'classnames'

// ================================================================================================

// Types:
type State = {
  counter: number
}

type Ctx = {
  state: State
  dispatch: Dispatch<any>
}

// Context:
export const AppContext = createContext<Ctx>({ state: { counter: 0 }, dispatch: () => null })

// Init State:
const initialState = {
  counter: 0
}

// Reducer:
const reducer: Reducer<State, any> = (state: State, { type, payload }: any) => {
  switch (type) {
    case 'ADD':
      return { ...state, counter: state.counter + 1 }

    default:
      return state
  }
}

export const AppProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}
