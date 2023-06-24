import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

type Props = {
  images: string[];
};

const Carousel = ({ images }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  const HandleNextIndex = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const HandlePrevIndex = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1) % images.length);
  };

  return (
    <>
      <Styled.Wrapper>
        <Styled.PrevBtn onClick={HandlePrevIndex}>이전</Styled.PrevBtn>
        {images.map((image, index) => (
          <Styled.Image
            key={image}
            src={image}
            className={index === activeIndex ? 'active' : ''}
          />
        ))}
        <Styled.NextBtn onClick={HandleNextIndex}>다음</Styled.NextBtn>
      </Styled.Wrapper>
      <Styled.Indicators>
        {images.map((_, index) => (
          <Styled.Dot
            key={index}
            className={index === activeIndex ? 'active' : ''}
          />
        ))}
      </Styled.Indicators>
    </>
  );
};

export default Carousel;

const Styled = {
  Wrapper: styled.div`
    position: relative;
    width: 100%;
    height: 300px;
  `,

  Image: styled.img`
    display: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
    &.active {
      display: block;
    }
  `,

  PrevBtn: styled.button`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  `,

  NextBtn: styled.button`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  `,

  Indicators: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `,

  Dot: styled.span`
    width: 10px;
    height: 10px;
    background: lightgray;
    margin: 0 5px;
    border-radius: 50%;
    &.active {
      background: black;
    }
  `,
};
