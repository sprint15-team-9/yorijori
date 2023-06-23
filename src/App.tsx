import { styled } from 'styled-components';

const TestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
`;

const TestParagraph = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: hotpink;
`;

function App() {
  return (
    <TestWrapper>
      <TestParagraph>We are chingi</TestParagraph>
    </TestWrapper>
  );
}

export default App;
