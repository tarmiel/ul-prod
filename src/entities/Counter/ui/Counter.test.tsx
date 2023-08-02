import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import Counter from './Counter';

describe('Counter', () => {
  test('default render', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 1 },
      },
    });
    expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
  });

  test('test decrement', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 1 },
      },
    });
    const toggleBtn = screen.getByTestId('decrement');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');
  });

  test('test increment', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 1 },
      },
    });
    const toggleBtn = screen.getByTestId('increment');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('2');
  });
});
