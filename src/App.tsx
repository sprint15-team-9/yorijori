import { ThemeProvider, styled } from 'styled-components';
import Router from './routes/Router';
import theme from './style/theme';
import GlobalStyle from './style/GlobalStyle';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Router />
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};

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
