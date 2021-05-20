import { render, screen } from '@testing-library/react';
import App from './App';
let tiny = require('tiny-json-http')

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// afterAll(async () => {
//   await sandbox.end()
// })

// test that GET request completes without error
test('get /', async () => {
  let url = 'http://localhost:3000'
  await tiny.get({url})
})