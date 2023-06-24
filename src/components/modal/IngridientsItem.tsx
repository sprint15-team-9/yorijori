import { styled } from 'styled-components';
import CheckBox from '../CheckBox';
import PopUpCaretIcon from '../../assets/icons/PopUpCaretIcon';

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
  gap: 16px;
  align-items: center;
`;

const IngridientText = styled.p`
  font-size: 16px;
  // black을 쏘네가 정해주면 바꿔야해요
  color: #1a1e27;
  flex: 1;
`;

// 아이콘으로 교체 필요
const AlternativeIcon = styled(PopUpCaretIcon)`
  cursor: pointer;
`;
