import { styled } from 'styled-components';

type ButtonType = 'confirm' | 'back';
type DescisionButtonProps = {
  buttontype: ButtonType;
  innerText: string;
  // 핸들러 달아줄때 ? 빼야겠다
  onClick?: () => void;
};
const DescisionButton = ({
  buttontype,
  innerText,
  onClick,
}: DescisionButtonProps) => {
  return (
    <StyledButton type="button" buttontype={buttontype} onClick={onClick}>
      <InnerText>{innerText}</InnerText>
    </StyledButton>
  );
};

export default DescisionButton;

const StyledButton = styled.button<Pick<DescisionButtonProps, 'buttontype'>>`
  display: flex;
  flex: 1;
  justify-content: center;
  background-color: ${(props) =>
    props.buttontype === 'confirm' ? '#ED7732' : '#95989F'};

  outline: none;
  border: none;
  padding: 14px 16px;
  border-radius: 12px;

  cursor: pointer;
  user-select: none;
`;

const InnerText = styled.p`
  font-size: 16px;
  line-height: 120%;
  font-weight: 700;
  color: white;
`;
