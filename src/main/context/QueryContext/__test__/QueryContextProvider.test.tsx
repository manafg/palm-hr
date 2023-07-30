import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import QueryContextProvider from '../QueryContextProvider';

describe('QueryContextProvider', () => {
  test('renders children correctly', () => {
    const TestComponent = () => <div>Test Children</div>;

    const { getByText } = render(
      <QueryContextProvider>
        <TestComponent />
      </QueryContextProvider>
    );

    const childrenElement = getByText('Test Children');
    expect(childrenElement).toBeInTheDocument();
  });

  xtest('provides the same QueryClient instance', () => {
    const queryClient = new QueryClient();

    const TestComponent = () => {
      const queryClientContext1 = React.useContext(QueryClient);
      const queryClientContext2 = React.useContext(QueryClient);

      expect(queryClientContext1).toBe(queryClientContext2);
      expect(queryClientContext1).toBe(queryClient);

      return null;
    };

    render(
      <QueryClientProvider client={queryClient}>
        <QueryContextProvider>
          <TestComponent />
        </QueryContextProvider>
      </QueryClientProvider>
    );
  });
});
