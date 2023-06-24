import { styled } from 'styled-components';
import Router from './routes/Router';
import { useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
function App() {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 0,
          staleTime: 1000 * 100,
          cacheTime: 1000 * 100,
        },
      },
    })
  );
  return (
    <QueryClientProvider client={client}>
      <Wrapper>
        <Container>
          <Router />
        </Container>
      </Wrapper>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: bisque;
`;

const Container = styled.div`
  width: 390px;
  height: 100vh;
  background-color: white;
`;
