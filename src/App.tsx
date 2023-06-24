import { ThemeProvider, styled } from 'styled-components';
import Router from './routes/Router';
import theme from './style/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
