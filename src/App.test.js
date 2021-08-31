import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("|| operator test", () => {
  let cachedRoles = ["ComplexSearch.Run", "someOtherRole"]
  //cachedRoles = null
  //cachedRoles = undefined

  const result = cachedRoles || ["rediculousRole"]

  console.log(result)
})