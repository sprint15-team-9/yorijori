import { styled } from 'styled-components';
import SearchIcon from '../../assets/icons/SearchIcon';
import { Link } from 'react-router-dom';
import HeaderLogoIcon from '../../assets/icons/HeaderLogoIcon';

export default function Header() {
  return (
    <Wrapper>
      <HeaderLogoIcon />
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
  z-index: 1;
`;
