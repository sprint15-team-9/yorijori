import { styled } from 'styled-components';
import CheckBox from '../CheckBox';

type IngridientsItemProps = {
  text: string;
  isActive?: boolean;
};
const IngridientsItem = ({ text, isActive }: IngridientsItemProps) => {
  return (
    <Wrapper>
      <CheckBox isActive={!!isActive} />
      <IngridientText>{text}</IngridientText>
      <AlternativeIcon>{'>'}</AlternativeIcon>
    </Wrapper>
  );
};

export default IngridientsItem;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const IngridientText = styled.p`
  font-size: 12px;
  // black을 쏘네가 정해주면 바꿔야해요
  color: #181a1b;
  flex: 1;
`;

// 아이콘으로 교체 필요
const AlternativeIcon = styled.span`
  cursor: pointer;
`;
