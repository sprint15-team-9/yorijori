import { useState } from 'react';
import { styled } from 'styled-components';
import CheckIcon from '../../assets/icons/CheckIcon';
type CheckBoxProps = {
  isActive: boolean;
};

const CheckBox = ({ isActive }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(isActive);
  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Wrapper onClick={handleCheckbox}>
      <Input type="checkbox" />
      <Check isActive={isChecked} />
    </Wrapper>
  );
};

export default CheckBox;

const Wrapper = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const Check = styled(CheckIcon)``;
