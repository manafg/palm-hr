import React from 'react';
import { render } from '@testing-library/react';
import { BooksInfoProvider, BooksInfoStateContext } from '../BooksContext';
import book from '../../../mocks/bookinfo'
describe('BooksInfoProvider', () => {
  test('renders children correctly', () => {
    const { getByText } = render(
      <BooksInfoProvider>
        <div>Test Children</div>
      </BooksInfoProvider>
    );

    const childrenElement = getByText('Test Children');
    expect(childrenElement).toBeInTheDocument();
  });

  test('provides state and setState in the context', () => {
    const TestComponent = () => {
      const [state, setState] = React.useContext(BooksInfoStateContext);

      expect(state).toEqual([]);
      expect(typeof setState).toBe('function');

      return null;
    };

    render(
      <BooksInfoProvider>
        <TestComponent />
      </BooksInfoProvider>
    );
  });

  xtest('changes state when setState is called', () => {
    const TestComponent = () => {
      const [state, setState] = React.useContext(BooksInfoStateContext);

     expect(state).toEqual([]);

      setState([book]);

    expect(state).toEqual([book]);

      return null;
    };

    render(
      <BooksInfoProvider>
        <TestComponent />
      </BooksInfoProvider>
    );
  });
});
