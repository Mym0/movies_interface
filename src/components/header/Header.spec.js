import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  test('should display The header elements', () => {
   const {getByTestId, getAllByTestId} = render(
   <BrowserRouter>
   <Header />
   </BrowserRouter>
   );
    const navbar = getByTestId('navbar');
    const navbarLinks = getAllByTestId('navbar-link');

    expect(navbar).toBeInTheDocument();
    expect(navbarLinks).toHaveLength(2);
  });
});
