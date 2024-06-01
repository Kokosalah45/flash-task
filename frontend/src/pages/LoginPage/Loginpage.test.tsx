import { test, expect } from 'vitest';
import { render, renderHook } from '@/test-utils';
import LoginPage from '.';
import userEvent from '@testing-library/user-event';
import { useAuth } from '@/providers/AuthContext';

test('renders a the login form', async () => {
  const { findByRole, findByText } = render(<LoginPage />);

  const emailInput = await findByRole('textbox', { name: /username/i });
  const passwordInput = await findByText(/password/i);

  expect(passwordInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

test('should not submit if the validation doesnt pass', async () => {
  const { findByRole, findByText } = render(<LoginPage />);

  const emailInput = await findByRole('textbox', { name: /username/i });
  const passwordInput = await findByText(/password/i);

  expect(passwordInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();

  await userEvent.type(emailInput, 'test');
  await userEvent.type(passwordInput, '12');

  const submitButton = await findByRole('button', { name: /submit/i });

  await userEvent.click(submitButton);

  const emailError = await findByText(/Please enter a valid email/i);
  expect(emailError).toBeInTheDocument();

  const passwordError = await findByText(
    /Password must be at least 3 characters/i
  );
  expect(passwordError).toBeInTheDocument();
});

test('should submit if the validation passes and user should be authed', async () => {
  const { findByRole, findByText, queryByText } = render(<LoginPage />);

  const emailInput = await findByRole('textbox', { name: /username/i });
  const passwordInput = await findByText(/password/i);

  expect(passwordInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();

  await userEvent.type(emailInput, 'koko@gmail.com');
  await userEvent.type(passwordInput, '123');

  const submitButton = await findByRole('button', { name: /submit/i });

  await userEvent.click(submitButton);

  const emailError = queryByText(/Please enter a valid email/i);

  expect(emailError).not.toBeInTheDocument();

  const passwordError = queryByText(/Password must be at least 3 characters/i);

  expect(passwordError).not.toBeInTheDocument();
});
