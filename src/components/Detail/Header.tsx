import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { BackIcon } from '../../assets/icons/BackIcon';

type HeaderProps = {
  title: string;
};
export default function Header({ title }: HeaderProps) {
  return (
    <Wrapper>
      <IconWrapper to="/">
        <BackIcon />
      </IconWrapper>
      <Container>
        <HeaderText>{title}</HeaderText>
      </Container>
    </Wrapper>
  );
}

const IconWrapper = styled(Link)`
  position: absolute;
  left: 20px;
  top: 12px;
`;

const Wrapper = styled.header`
  width: 100%;
  display: flex;

  align-items: center;
  height: 52px;
  padding: 12px 20px;
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;

  position: relative;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const HeaderText = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;

  color: '#3B4044';
`;
