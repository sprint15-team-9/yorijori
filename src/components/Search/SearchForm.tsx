import { styled } from 'styled-components';
import PrevIcon from '../../assets/icons/PrevIcon';
import CloseIcon from '../../assets/icons/CloseIcon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchForm() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  return (
    <Wrapper>
      <PrevBtn onClick={() => navigate(-1)}>
        <PrevIcon />
      </PrevBtn>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          value={inputValue}
          onChange={handleInputChange}
        />
        {inputValue && (
          <span onClick={handleClearInput}>
            <CloseIcon />
          </span>
        )}
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
  height: 52px;
  padding: 12px 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const PrevBtn = styled.span`
  cursor: pointer;
`;

const Form = styled.form`
  position: relative;
  flex-basis: 90%;
  input {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: none;
    background: #f2f4f6;
    padding: 12px;
    outline: none;
  }

  svg {
    width: 27px;
    height: 27px;
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
  }
`;
