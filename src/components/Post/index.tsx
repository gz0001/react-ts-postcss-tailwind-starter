import * as React from 'react'
import { Box, createState, Headline, Text } from 'tt-react-ui-2'
import Ajax from 'utils/Ajax'

// ================================================================================================

type State = {
  data: Record<string, any>
  error: boolean
  loading: boolean
}

export const Post: React.FunctionComponent = React.memo(() => {
  // Random post id
  const random = Math.floor(Math.random() * 100) + 1

  // init ajax instance
  const ajax = new Ajax()

  // Mount status
  const mount = React.useRef(false)

  // State
  const [state, setState] = createState<State>({ data: null, error: false, loading: true })

  const { data, loading, error } = state

  // Fetch funtion
  const fetch = async () => {
    setState({ loading: true })
    const data = await ajax.get(`https://jsonplaceholder.typicode.com/posts/${random}`)
    if (mount.current) {
      data
        ? setState({ data, loading: false, error: false })
        : setState({ loading: false, error: true })
    }
  }

  // Fetch data on mount and cancel all fetch request on unmount
  React.useEffect(() => {
    mount.current = true
    fetch()
    return () => {
      ajax.cancel()
      mount.current = false
    }
  }, [])

  console.log('Post rendered')

  // Render
  if (loading) return <p className="text-center">Loading...</p>

  if (error) return <p className="text-center">Error :(</p>

  return (
    <Box className="Post" border="2, first" display="block" p="4" mx="auto" w="auto">
      <Headline mt="4">Post: {random}</Headline>
      <Text bold display="block" center mt="2" size="xl">
        {data.title}
      </Text>
      <br />
      <Text>{data.body}</Text>
    </Box>
  )
})
