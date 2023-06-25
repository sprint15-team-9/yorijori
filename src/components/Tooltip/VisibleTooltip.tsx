import { styled } from 'styled-components';

export default function VisibleTooltip() {
  return <Wrapper>시간을 클릭하면 해당 영상시점으로 이동해요!</Wrapper>;
}

const Wrapper = styled.div`
  position: absolute;
  left: 70px;
  bottom: -18px;
  width: 168px;
  height: 58px;
  border: 1px solid #dfe2e5;
  padding: 12px 14px;
  text-align: left;
  font-weight: 900;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.18);

  font-size: 14px;
  word-break: keep-all;
  line-height: 17px;
  &::before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid #dfe2e5;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    left: -21px;
    top: 18px;
  }
  &::after {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid #fff;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    left: -20px;
    top: 18px;
  }
`;
