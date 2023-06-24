import { styled } from 'styled-components';
import Router from './routes/Router';

function App() {
  return (
    <Wrapper>
      <Container>
        <Router />
      </Container>
    </Wrapper>
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
