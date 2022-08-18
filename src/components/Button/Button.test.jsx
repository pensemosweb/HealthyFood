import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Button from './Button.jsx';

it('Button should shown children', () => {
  const view = render(<Button>I'm a child</Button>);
  const btn = view.getByTestId('button');

  expect(btn).toHaveTextContent("I'm a child");
});