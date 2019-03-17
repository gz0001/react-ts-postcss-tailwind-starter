// @ts-nocheck
// Components:
import React, { Component } from 'react'

// Custom Components
import { Stateless } from 'components/_Stateless'
import { Stateful } from 'components/_Stateful'
import { Post } from 'components/Post'

// Ajax:
import Ajax from 'utils/Ajax'

// UI:
import { Box, Selectbox, Option, Selection, Container, Row, Col, Headline } from 'tt-react-ui-2'

// Atoms:
import { Button } from 'atoms/Button'
// ================================================================================================

const options: Option[] = [
  { label: 'Item 1', value: 1 },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 },
  { label: 'Item 4', value: 4 },
  { label: 'Item 5', value: 5 },
  { label: 'Item 6', value: 6 },
  { label: 'Item 7', value: 7 }
]

type State = {
  select: Selection
  open: boolean
}

class Home extends Component<any, State> {
  state: State = {
    select: [],
    open: false
  }

  btnRef = React.createRef<HTMLDivElement>()

  ajax: Ajax = new Ajax()

  handleSelect = (select: Selection) => {
    this.setState({ select })
  }

  toogleOpen = () => {
    this.setState(({ open }) => ({ open: !open }))
  }

  async componentDidMount() {
    const res = await this.ajax.post('https://jsonplaceholder.typicode.com/posts', {
      data: { title: 'foo', body: 'barsacascsacsac', userId: 1 }
    })
    console.log('res: ', res, this.btnRef.current)
  }

  // ============================================

  render() {
    const { select, open } = this.state
    return (
      <Box
        className="Home"
        h="screen"
        items="center"
        pt="10"
        flex="col"
        bg="white"
        // @ts-ignore
        ref={this.btnRef}
      >
        <Box
          justify="center"
          items="center"
          type="header"
          bg="first"
          text={'5xl ,red'}
          font={'serif, bold'}
          className="uppercase w-1/2"
          w="1/4"
        >
          Im a box
        </Box>
        <Selectbox
          className="w-1/4"
          options={options}
          label="choose an item:"
          material
          multiple
          onSelect={this.handleSelect}
          selection={select}
          style={{ width: '50%' }}
        />

        <Button my="4" py="4" px="8" onClick={() => console.log('clicked', this.btnRef)}>
          Click here
        </Button>

        <Stateful background="transparent"> </Stateful>

        <Container mt="6">
          <Row>
            <Col width="12, md:6, lg:3">
              <Box h="12" bg="first" text="white" items="center" justify="center" mt="2">
                col 1
              </Box>
            </Col>
            <Col width="12, md:6, lg:3">
              <Box h="12" bg="first" text="white" items="center" justify="center" mt="2">
                col 2
              </Box>
            </Col>
            <Col width="12, md:6, lg:3">
              <Box h="12" bg="first" text="white" items="center" justify="center" mt="2">
                col 3
              </Box>
            </Col>
            <Col width="12, md:6, lg:3">
              <Box h="12" bg="first" text="white" items="center" justify="center" mt="2">
                col 4
              </Box>
            </Col>
          </Row>
          <hr />
          <Row justify="center">
            <Col width="12, md:6, lg:5" mt="12">
              <Headline center>Ajax example:</Headline>
              <Button onClick={this.toogleOpen} display="block" p="4" my="4" mx="auto">
                {open ? 'Hide Pose' : 'Show Post'}
              </Button>
              {open && <Post />}
            </Col>
          </Row>
        </Container>
      </Box>
    )
  }
}

// ================================================================================================

export default Home
