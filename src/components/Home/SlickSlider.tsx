import { Dispatch, SetStateAction } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactNode } from 'react';
type Props = {
  children: ReactNode;
  setActiveIndex: Dispatch<SetStateAction<number>>;
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
