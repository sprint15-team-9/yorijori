import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: setActiveIndex,
  };

  return (
    <>
      <Wrapper>
        <TextBox>
          <CurationText>{data[activeIndex].text}</CurationText>
          <Link to={`/detail/${data[activeIndex].text}`}>
            <img src="/public/next.svg" />
          </Link>
        </TextBox>
        <Slider {...settings}>
          {data.map((item, index) => (
            <ImageContainer key={index}>
              <Image src={item.image} />
              <CaptionBox>
                <p>
                  난이도 {item.level}
                  <Divider>|</Divider>
                  <span>
                    <img src="/public/clock.svg" />
                  </span>
                  {item.time}
                </p>
              </CaptionBox>
            </ImageContainer>
          ))}
        </Slider>
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

const ImageContainer = styled.div`
  height: 160px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const CaptionBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 10px;
  right: 10px;
  width: 114px;
  height: 28px;
  background-color: black;
  border-radius: 8px;
  opacity: 60%;
  padding: 5px;

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    font-size: 12px;

    img {
      display: inline;
      margin-right: 5px;
    }
  }
`;

const Divider = styled.span`
  margin: 0 5px;
`;
