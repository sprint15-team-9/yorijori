import styled, { ThemeProvider } from 'styled-components';
import Router from './routes/Router';
import { useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import theme from './style/theme';
import GlobalStyle from './style/GlobalStyle';
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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Container>
            <Router />
          </Container>
        </Wrapper>
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.primary_2};
`;

const Container = styled.div`
  width: 360px;
  min-height: 100vh;
  background-color: white;
`;
