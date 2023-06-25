import { styled } from 'styled-components';
import SearchIcon from '../../assets/icons/SearchIcon';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Wrapper>
      <h1>요리조리</h1>
      <Link to="/search">
        <SearchIcon />
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  padding: 12px 20px;
  position: sticky;
  top: 0;
  background: white;
  z-index: 1000;
`;
