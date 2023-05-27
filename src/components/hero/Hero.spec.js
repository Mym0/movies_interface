import { render,screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from './Hero';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Hero', () => {
  test('should display The Hero elements',async () => {
    await act(()=> {
      render(<Hero />);
    })
    const carousel = screen.getByTestId('carousel');
    const beforeIcon = screen.getByTestId('NavigateBeforeIcon');    
    const afterIcon = screen.getByTestId('NavigateNextIcon');    
    screen.debug()
    expect(carousel).toBeInTheDocument();
    expect(beforeIcon).toBeInTheDocument();
    expect(afterIcon).toBeInTheDocument();
  });
});
