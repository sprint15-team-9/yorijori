import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CarouselContents from './CarouselContents';

type Props = {
  data: {
    text: string;
    image: string;
    level: string;
    time: string;
  }[];
};

const Carousel = ({ data }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Wrapper>
        <TextBox>
          <CurationText>{data[activeIndex].text}</CurationText>
          <Link to={`/detail/${data[activeIndex].text}`}>
            <img src="/public/next.svg" />
          </Link>
        </TextBox>
        <CarouselContents data={data} setActiveIndex={setActiveIndex} />
      </Wrapper>
    </>
  );
};

export default Carousel;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  .slick-slider .slick-dots li {
    width: 6px;
    height: 6px;
    background: #d9d9d9;
    margin: 0 5px;
    border-radius: 50%;
    cursor: auto;
    button {
      display: none;
    }
  }

  .slick-slider .slick-dots li.slick-active {
    background: #ed7732;
    width: 19px;
    border-radius: 5px;
    cursor: auto;
    button {
      display: none;
    }
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const CurationText = styled.p`
  font-size: 20px;
  margin-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
