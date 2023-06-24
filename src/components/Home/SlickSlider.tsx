import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { createGlobalStyle } from 'styled-components';

type Props = {
  children: React.ReactNode;
  setActiveIndex: (index: number) => void;
};

export default function SlickSlider({ children, setActiveIndex }: Props) {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: setActiveIndex,
  };
  return <Slider {...settings}>{children}</Slider>;
}

const GlobalStyle = createGlobalStyle`
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
