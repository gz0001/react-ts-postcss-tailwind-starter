import Ajax from './Ajax'

const ajax = new Ajax()

it('return data of get request', async () => {
  const data = await ajax.get('https://jsonplaceholder.typicode.com/todos/1')
  expect(typeof data).toBe('object')
})

it('return false if error', async () => {
  const data = await ajax.get('https://jsonplaceholder.typicode.com/todos/abc')
  expect(typeof data).toBe('boolean')
})
