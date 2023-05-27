import { render, fireEvent, act  } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';


const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Login', () => {
  test('should display The Login elements', () => {
   const {getByTestId, getByPlaceholderText} = render( <Login />,  {wrapper: MemoryRouter});
    const loginHeader = getByTestId('login-header');
    const submitButton = getByTestId('login-button');
    const emailInput = getByPlaceholderText("Enter email");
    const passwordInput = getByPlaceholderText('Password');
   
    expect(loginHeader).toBeInTheDocument();
    expect(loginHeader).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).not.toBeDisabled();
    expect(submitButton).toBeInTheDocument();


    expect(submitButton).toBeDisabled();
  });


  test('should activate submit button when Input values are vaild',async () => {
    const {getByTestId, getByPlaceholderText, debug} = render( <Login />,  {wrapper: MemoryRouter});

    const submitButton = getByTestId('login-button');
    const emailInput = getByTestId("input-email");
    const passwordInput = getByPlaceholderText('Password');
    debug(emailInput)

    await act(()=>{
      fireEvent.change(emailInput, {target: {value: 'test@test.com'}})

      fireEvent.change(passwordInput, {target:{ value: '***************'}})
    })

    expect(emailInput).toHaveValue('test@test.com');
    expect(passwordInput).toHaveValue('***************');

    expect(submitButton).not.toBeDisabled();
  });
});
